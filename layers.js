addLayer("P",{
	name:"Prestige",
	symbol:"P",
	position:0,
	row:0,
	startData(){return{
		unlocked:true,
		points:new Decimal(0),
		}
	},
	color:"#00ffe2",
	baseResource:"点数",
	baseAmount(){return player.points},
	resource:"声望",
	requires:new Decimal(1),
	type:"normal",
	exponent:0.8,
	softcap:new Decimal(1),
	softcapPower:new Decimal(0.2),
	upgrades:{
		11:{
			title:"更多产量是好事 I",
			description:"点数增益削弱后获得的点数",
			cost:new Decimal(1),
			effect(){
				if(hasUpgrade("P",12))return player.points.mul(0.0075).min(0.002)
				return player.points.mul(0.005).min(0.00075)
			},
			effectDisplay(){
				if(hasUpgrade("P",12))
				{
					if(upgradeEffect("P",11)>=new Decimal(0.002))return "+"+format(upgradeEffect("P",11))+"（已达硬上限）"
					else return "+"+format(upgradeEffect("P",11))
				}
				else if(upgradeEffect("P",11)>=new Decimal(0.00075))return "+"+format(upgradeEffect("P",11))+"（已达硬上限）"
				else return "+"+format(upgradeEffect("P",11))
			}
		},
		12:{
			title:"更多产量是好事 II",
			description:"删除 11 的第一个硬上限并增强",
			cost:new Decimal(1),
			unlocked(){return hasUpgrade("P",11)}
		},
		13:{
			title:"更多产量是好事 III",
			description:"点数增益削弱前获得的点数",
			cost:new Decimal(1),
			effect(){
				return player.points.mul(0.25).min(0.5)
			},
			effectDisplay(){
				if(upgradeEffect("P",13)>=new Decimal(0.5))return "+"+format(upgradeEffect("P",13))+"（已达硬上限）"
				else return "+"+format(upgradeEffect("P",13))
			},
			unlocked(){return hasUpgrade("P",12)}
		},
		14:{
			title:"更多产量是好事 IV",
			description:"使削弱公式的削弱效果降低",
			cost:new Decimal(1),
		},
		15:{
			title:"更多产量是好事 V",
			description:"将削弱前每秒获得点数 x1.5",
			cost:new Decimal(1),
		}
	},
})