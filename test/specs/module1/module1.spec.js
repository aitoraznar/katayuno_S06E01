describe('Tennis ScoreBoard' , function() {
    var baseSrc = '../../../src/';
    var module1 = require(baseSrc + 'module1/index.js');
    var ScoreBoard = module1.ScoreBoard;

    var playerA = 'A';
    var playerB = 'B';
   
    describe('Start ScoreBoard', function() {
        var scoreBoard;
        var caseUses = [
            { title: '"A" player Wins', 'A': 0, 'B': 0 , display: 'Love-Love' },
            { title: '"A" player score', 'A': 1, 'B': 0 , display: 'Fifteen-Love' },
            { title: '"B" player score', 'A': 0, 'B': 1 , display: 'Love-Fifteen' },

            { title: '"A" player Deuce', 'A': 3, 'B': 3, display: 'Deuce' },
            { title: '"A" player Advantage', 'A': 4, 'B': 3, display: 'Advantage-Forty' },
            { title: '"B" player Advantage', 'A': 3, 'B': 4, display: 'Forty-Advantage' }
        ];

        beforeEach(function() {
            // create scoreboard
            scoreBoard = new ScoreBoard();
        });
        
        it('The display should be "Love-Love"', function() {
            expect(scoreBoard.display()).toBe('Love-Love');
        });

        describe('The Score', function() {
            beforeEach(function () {
                scoreBoard.score(playerA);
            });

            it('The points of A should be 1', function() {
                expect(scoreBoard.points[playerA]).toBe(1);
            });
        });

        caseUses.forEach(function(caseUse) {
            describe(caseUse.title, function() {
                var pointsA;
                var pointsB;

                beforeEach(function () {
                    scoreBoard.points.A = caseUse.A;
                    scoreBoard.points.B = caseUse.B;

                    pointsA = scoreBoard.points.A;
                    pointsB = scoreBoard.points.B;
                });


                it('The display should be "{{display}}"'.replace('{{display}}', caseUse.display), function() {
                    expect(scoreBoard.display()).toBe(caseUse.display);
                });
            });
        });

        /*describe('"A" player scores', function() {
            var player = 'A';
            beforeEach(function () {
                scoreBoard.score(player);
            });

            it('The point of A should be 1', function() {
                expect(scoreBoard.points[player]).toBe(1);
            });

            it('The display should be "Fifteen-Love"', function() {
                expect(scoreBoard.display()).toBe('Fifteen-Love');
            });
        });

        describe('"B" player scores', function() {
            var player = 'B';
            beforeEach(function () {
                scoreBoard.score(player);
            });

            it('The point of B should be 1', function() {
                expect(scoreBoard.points[player]).toBe(1);
            });

            it('The display should be "Love-Fifteen"', function() {
                expect(scoreBoard.display()).toBe('Love-Fifteen');
            });
        });

        describe('"A" player Wins', function() {
            beforeEach(function () {
                scoreBoard.score(playerA);
                scoreBoard.score(playerA);
                scoreBoard.score(playerA);
                scoreBoard.score(playerA);
            });

            it('"A" player at least 4 points', function() {
                expect(scoreBoard.points[playerA]).toBeGreaterThanOrEqual(4);
            });

            it('"A" player has 2 more points than "B" player', function() {
                var pointsA = scoreBoard.points[playerA];
                var pointsB = scoreBoard.points[playerB];

                expect(pointsA).toBeGreaterThanOrEqual(pointsB + 2);
            });
        });*/



    });
    

});
