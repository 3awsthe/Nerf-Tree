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
	upgrades:{
		11:{
			title:"更多产量是好事 I",
			description:"点数增益点数",
			cost:new Decimal(1),
			effect(){
				if(hasUpgrade("P",12))return player.points.mul(0.005).min(0.0015)
				return player.points.mul(0.005).min(0.00075)
			},
			effectDisplay(){
				if(hasUpgrade("P",12))
				{
					if(upgradeEffect("P",11)>=new Decimal(0.0015))return "+"+format(upgradeEffect("P",11))+"（已达硬上限）"
					else return "+"+format(upgradeEffect("P",11))
				}
				else if(upgradeEffect("P",11)>=new Decimal(0.00075))return "+"+format(upgradeEffect("P",11))+"（已达硬上限）"
				else return "+"+format(upgradeEffect("P",11))
			}
		},
		12:{
			title:"更多产量是好事 II",
			description:"删除 11 的第一个硬上限",
			cost:new Decimal(1),
			unlocked(){return hasUpgrade("P",12)}
		}
	}
})