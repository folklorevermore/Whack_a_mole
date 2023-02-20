//游戏时间
var gameTime;


//地鼠出现间隔时间
var intervalTime;

//地鼠停留时间
var stayTime;

//倒计时间
var leastTime;

//计时器
var checkTimeID, showMouseID, backID;

//打中，溜掉，总数，得分
var hitNum, missNum, total, score;

function startGame() {
	//初始化界面
	init();

	//游戏倒计时
	checkTime();


	//随机出现地鼠
	showMouse();

}

function init() {
	document.getElementById("gameTime").disable = "disable"; //其余时间变灰
	document.getElementById("remainTime").disable = "disable";
	document.getElementById("stayTime").disable = "disable";
	document.getElementById("startBt").disable = "disable";
	document.getElementById("endBt").disable = ""; //结束时间变亮


	gameTime = document.getElementById("gameTime").value;
	intervalTime = document.getElementById("remainTime").value;
	stayTime = document.getElementById("stayTime").value;
	leastTime = gameTime * 60;

	hitNum = 0;
	missNum = 0;
	total = 0;
	score = 0;
	showMs();

}

function showMs() {
	document.getElementById("score").innerHTML = "打中：" + hitNum + "只 &nbsp" + "溜掉：" + missNum + "只<br/>" + "总分：" +
		total + "分 &nbsp" + "得分：" + score + "分";
}

function checkTime() {
	document.getElementById("timeOut").innerText = leastTime;
	leastTime--;
	checkTimeID = setTimeout(checkTime, 1000);
}

//显示老鼠
function showMouse() {

	//计算25以内的随机整数
	var rand = parseInt(Math.random() * 25)
	console.log(rand);

	//得到所有img对象数组中的 某一个x
	var obj = document.images[rand];

	//修改其src属性为  老鼠的图片，并开启定时器
	obj.src = "/img/01.jpg";

	//开启定时器 让x定时消失
	showMouseID = setTimeout(showMouse, intervalTime * 1000);
	backID = setTimeout(function() {
		back(obj);
	}, stayTime * 1000);
}

//老鼠消失
function back() {
	obj.src = "img/00.jpg";
	total += 100;
	score -= 100;
	missNum += 1;
	showMs();
}
