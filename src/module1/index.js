
function ScoreBoard() {
	this.pointsName = ['Love', 'Fifteen', 'Thirty', 'Forty', 'Advantage'];
	this.specialPointsName = {
		'Forty-Forty': 'Deuce'
	};

	this.points = {
		'A': 0,
		'B': 0
	};
}

ScoreBoard.prototype.display = function() {
	var display = this.pointsName[this.points.A] + '-' + this.pointsName[this.points.B];
	var specialDisplay = this.specialPointsName[display];

	return specialDisplay || display;
};

ScoreBoard.prototype.score = function(player) {
	this.points[player]++;
};

module.exports = {
	ScoreBoard: ScoreBoard
};
