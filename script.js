// Fetch and display NFL Scores
function fetchNFLScores() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard')
        .then(response => response.json())
        .then(data => {
            const scoresContainer = document.getElementById('nfl-scores');
            const games = data.events;

            if (games.length === 0) {
                scoresContainer.innerHTML = "<p>No games available at this moment.</p>";
                return;
            }

            games.forEach(game => {
                const homeTeam = game.competitions[0].competitors[0];
                const awayTeam = game.competitions[0].competitors[1];
                const gameStatus = game.status.type.description;

                const gameDiv = document.createElement('div');
                gameDiv.classList.add('game');
                gameDiv.innerHTML = `
                    <h3>${homeTeam.team.displayName} vs ${awayTeam.team.displayName}</h3>
                    <p>${homeTeam.team.shortDisplayName}: ${homeTeam.score}</p>
                    <p>${awayTeam.team.shortDisplayName}: ${awayTeam.score}</p>
                    <p>Status: ${gameStatus}</p>
                `;
                scoresContainer.appendChild(gameDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching NFL scores:', error);
            document.getElementById('nfl-scores').innerHTML = "<p>Failed to load scores. Please try again later.</p>";
        });
}

// Fetch and display NFL Teams
function fetchNFLTeams() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
        .then(response => response.json())
        .then(data => {
            const teamsContainer = document.getElementById('nfl-teams');
            const teams = data.sports[0].leagues[0].teams;

            teams.forEach(teamObj => {
                const team = teamObj.team;
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');
                teamDiv.innerHTML = `
                    <h3>${team.displayName}</h3>
                    <p>Abbreviation: ${team.abbreviation}</p>
                    <p>Location: ${team.location}</p>
                `;
                teamsContainer.appendChild(teamDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching NFL teams:', error);
            document.getElementById('nfl-teams').innerHTML = "<p>Failed to load teams. Please try again later.</p>";
        });
}

// Fetch and display NFL News
function fetchNFLNews() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/news')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('nfl-news');
            const articles = data.articles;

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerHTML = `
                    <h3>${article.headline}</h3>
                    <p>${article.description}</p>
                    <a href="${article.links.web.href}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching NFL news:', error);
            document.getElementById('nfl-news').innerHTML = "<p>Failed to load news. Please try again later.</p>";
        });
}

// Fetch all data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchNFLTeams();
    fetchNFLNews();
});


// Fetch and display MLB Scores
function fetchMLBScores() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard')
        .then(response => response.json())
        .then(data => {
            const scoresContainer = document.getElementById('mlb-scores');
            const games = data.events;

            if (games.length === 0) {
                scoresContainer.innerHTML = "<p>No games available at this moment.</p>";
                return;
            }

            games.forEach(game => {
                const homeTeam = game.competitions[0].competitors[0];
                const awayTeam = game.competitions[0].competitors[1];
                const gameStatus = game.status.type.description;

                const gameDiv = document.createElement('div');
                gameDiv.classList.add('game');
                gameDiv.innerHTML = `
                    <h3>${homeTeam.team.displayName} vs ${awayTeam.team.displayName}</h3>
                    <p>${homeTeam.team.shortDisplayName}: ${homeTeam.score}</p>
                    <p>${awayTeam.team.shortDisplayName}: ${awayTeam.score}</p>
                    <p>Status: ${gameStatus}</p>
                `;
                scoresContainer.appendChild(gameDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching MLB scores:', error);
            document.getElementById('mlb-scores').innerHTML = "<p>Failed to load scores. Please try again later.</p>";
        });
}

// Fetch and display MLB Teams
function fetchMLBTeams() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams')
        .then(response => response.json())
        .then(data => {
            const teamsContainer = document.getElementById('mlb-teams');
            const teams = data.sports[0].leagues[0].teams;

            teams.forEach(teamObj => {
                const team = teamObj.team;
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');
                teamDiv.innerHTML = `
                    <h3>${team.displayName}</h3>
                    <p>Abbreviation: ${team.abbreviation}</p>
                    <p>Location: ${team.location}</p>
                `;
                teamsContainer.appendChild(teamDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching MLB teams:', error);
            document.getElementById('mlb-teams').innerHTML = "<p>Failed to load teams. Please try again later.</p>";
        });
}

// Fetch and display MLB News
function fetchMLBNews() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/news')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('mlb-news');
            const articles = data.articles;

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerHTML = `
                    <h3>${article.headline}</h3>
                    <p>${article.description}</p>
                    <a href="${article.links.web.href}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching MLB news:', error);
            document.getElementById('mlb-news').innerHTML = "<p>Failed to load news. Please try again later.</p>";
        });
}

// Fetch all data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchMLBTeams();
    fetchMLBNews();
});

// Fetch and display NBA Scores
function fetchNBAScores() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard')
        .then(response => response.json())
        .then(data => {
            const scoresContainer = document.getElementById('nba-scores');
            const games = data.events;

            if (games.length === 0) {
                scoresContainer.innerHTML = "<p>No games available at this moment.</p>";
                return;
            }

            games.forEach(game => {
                const homeTeam = game.competitions[0].competitors[0];
                const awayTeam = game.competitions[0].competitors[1];
                const gameStatus = game.status.type.description;

                const gameDiv = document.createElement('div');
                gameDiv.classList.add('game');
                gameDiv.innerHTML = `
                    <h3>${homeTeam.team.displayName} vs ${awayTeam.team.displayName}</h3>
                    <p>${homeTeam.team.shortDisplayName}: ${homeTeam.score}</p>
                    <p>${awayTeam.team.shortDisplayName}: ${awayTeam.score}</p>
                    <p>Status: ${gameStatus}</p>
                `;
                scoresContainer.appendChild(gameDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching NBA scores:', error);
            document.getElementById('nba-scores').innerHTML = "<p>Failed to load scores. Please try again later.</p>";
        });
}

// Fetch and display NBA Teams
function fetchNBATeams() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams')
        .then(response => response.json())
        .then(data => {
            const teamsContainer = document.getElementById('nba-teams');
            const teams = data.sports[0].leagues[0].teams;

            teams.forEach(teamObj => {
                const team = teamObj.team;
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');
                teamDiv.innerHTML = `
                    <h3>${team.displayName}</h3>
                    <p>Abbreviation: ${team.abbreviation}</p>
                    <p>Location: ${team.location}</p>
                `;
                teamsContainer.appendChild(teamDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching NBA teams:', error);
            document.getElementById('nba-teams').innerHTML = "<p>Failed to load teams. Please try again later.</p>";
        });
}

// Fetch and display NBA News
function fetchNBANews() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('nba-news');
            const articles = data.articles;

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerHTML = `
                    <h3>${article.headline}</h3>
                    <p>${article.description}</p>
                    <a href="${article.links.web.href}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching NBA news:', error);
            document.getElementById('nba-news').innerHTML = "<p>Failed to load news. Please try again later.</p>";
        });
}

// Fetch all data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchNBATeams();
    fetchNBANews();
});

// Fetch and display WNBA Scores
function fetchWNBAScores() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard')
        .then(response => response.json())
        .then(data => {
            const scoresContainer = document.getElementById('wnba-scores');
            const games = data.events;

            if (games.length === 0) {
                scoresContainer.innerHTML = "<p>No games available at this moment.</p>";
                return;
            }

            games.forEach(game => {
                const homeTeam = game.competitions[0].competitors[0];
                const awayTeam = game.competitions[0].competitors[1];
                const gameStatus = game.status.type.description;

                const gameDiv = document.createElement('div');
                gameDiv.classList.add('game');
                gameDiv.innerHTML = `
                    <h3>${homeTeam.team.displayName} vs ${awayTeam.team.displayName}</h3>
                    <p>${homeTeam.team.shortDisplayName}: ${homeTeam.score}</p>
                    <p>${awayTeam.team.shortDisplayName}: ${awayTeam.score}</p>
                    <p>Status: ${gameStatus}</p>
                `;
                scoresContainer.appendChild(gameDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching WNBA scores:', error);
            document.getElementById('wnba-scores').innerHTML = "<p>Failed to load scores. Please try again later.</p>";
        });
}

// Fetch and display WNBA Teams
function fetchWNBATeams() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/teams')
        .then(response => response.json())
        .then(data => {
            const teamsContainer = document.getElementById('wnba-teams');
            const teams = data.sports[0].leagues[0].teams;

            teams.forEach(teamObj => {
                const team = teamObj.team;
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');
                teamDiv.innerHTML = `
                    <h3>${team.displayName}</h3>
                    <p>Abbreviation: ${team.abbreviation}</p>
                    <p>Location: ${team.location}</p>
                `;
                teamsContainer.appendChild(teamDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching WNBA teams:', error);
            document.getElementById('wnba-teams').innerHTML = "<p>Failed to load teams. Please try again later.</p>";
        });
}

// Fetch and display WNBA News
function fetchWNBANews() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/news')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('wnba-news');
            const articles = data.articles;

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerHTML = `
                    <h3>${article.headline}</h3>
                    <p>${article.description}</p>
                    <a href="${article.links.web.href}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching WNBA news:', error);
            document.getElementById('wnba-news').innerHTML = "<p>Failed to load news. Please try again later.</p>";
        });
}

// Fetch all data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchWNBATeams();
    fetchWNBANews();
});

// Fetch and display NHL Scores
function fetchNHLScores() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard')
        .then(response => response.json())
        .then(data => {
            const scoresContainer = document.getElementById('nhl-scores');
            const games = data.events;

            if (games.length === 0) {
                scoresContainer.innerHTML = "<p>No games available at this moment.</p>";
                return;
            }

            games.forEach(game => {
                const homeTeam = game.competitions[0].competitors[0];
                const awayTeam = game.competitions[0].competitors[1];
                const gameStatus = game.status.type.description;

                const gameDiv = document.createElement('div');
                gameDiv.classList.add('game');
                gameDiv.innerHTML = `
                    <h3>${homeTeam.team.displayName} vs ${awayTeam.team.displayName}</h3>
                    <p>${homeTeam.team.shortDisplayName}: ${homeTeam.score}</p>
                    <p>${awayTeam.team.shortDisplayName}: ${awayTeam.score}</p>
                    <p>Status: ${gameStatus}</p>
                `;
                scoresContainer.appendChild(gameDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching NHL scores:', error);
            document.getElementById('nhl-scores').innerHTML = "<p>Failed to load scores. Please try again later.</p>";
        });
}

// Fetch and display NHL Teams
function fetchNHLTeams() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/teams')
        .then(response => response.json())
        .then(data => {
            const teamsContainer = document.getElementById('nhl-teams');
            const teams = data.sports[0].leagues[0].teams;

            teams.forEach(teamObj => {
                const team = teamObj.team;
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');
                teamDiv.innerHTML = `
                    <h3>${team.displayName}</h3>
                    <p>Abbreviation: ${team.abbreviation}</p>
                    <p>Location: ${team.location}</p>
                `;
                teamsContainer.appendChild(teamDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching NHL teams:', error);
            document.getElementById('nhl-teams').innerHTML = "<p>Failed to load teams. Please try again later.</p>";
        });
}

// Fetch and display NHL News
function fetchNHLNews() {
    fetch('http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('nhl-news');
            const articles = data.articles;

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerHTML = `
                    <h3>${article.headline}</h3>
                    <p>${article.description}</p>
                    <a href="${article.links.web.href}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching NHL news:', error);
            document.getElementById('nhl-news').innerHTML = "<p>Failed to load news. Please try again later.</p>";
        });
}

// Fetch all data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchNHLTeams();
    fetchNHLNews();
});

// Fetch and display Soccer Scores (Premier League)
function fetchSoccerScores() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard')
        .then(response => response.json())
        .then(data => {
            const scoresContainer = document.getElementById('mls-scores');
            const games = data.events;

            if (games.length === 0) {
                scoresContainer.innerHTML = "<p>No games available at this moment.</p>";
                return;
            }

            games.forEach(game => {
                const homeTeam = game.competitions[0].competitors[0];
                const awayTeam = game.competitions[0].competitors[1];
                const gameStatus = game.status.type.description;

                const gameDiv = document.createElement('div');
                gameDiv.classList.add('game');
                gameDiv.innerHTML = `
                    <h3>${homeTeam.team.displayName} vs ${awayTeam.team.displayName}</h3>
                    <p>${homeTeam.team.shortDisplayName}: ${homeTeam.score}</p>
                    <p>${awayTeam.team.shortDisplayName}: ${awayTeam.score}</p>
                    <p>Status: ${gameStatus}</p>
                `;
                scoresContainer.appendChild(gameDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching Soccer scores:', error);
            document.getElementById('soccer-scores').innerHTML = "<p>Failed to load scores. Please try again later.</p>";
        });
}

// Fetch and display Soccer Teams (Premier League)
function fetchSoccerTeams() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/teams')
        .then(response => response.json())
        .then(data => {
            const teamsContainer = document.getElementById('mls-teams');
            const teams = data.sports[0].leagues[0].teams;

            teams.forEach(teamObj => {
                const team = teamObj.team;
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');
                teamDiv.innerHTML = `
                    <h3>${team.displayName}</h3>
                    <p>Abbreviation: ${team.abbreviation}</p>
                    <p>Location: ${team.location}</p>
                `;
                teamsContainer.appendChild(teamDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching Soccer teams:', error);
            document.getElementById('soccer-teams').innerHTML = "<p>Failed to load teams. Please try again later.</p>";
        });
}

// Fetch and display Soccer News (Premier League)
function fetchSoccerNews() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/news')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('mls-news');
            const articles = data.articles;

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerHTML = `
                    <h3>${article.headline}</h3>
                    <p>${article.description}</p>
                    <a href="${article.links.web.href}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching Soccer news:', error);
            document.getElementById('soccer-news').innerHTML = "<p>Failed to load news. Please try again later.</p>";
        });
}

// Fetch all data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchSoccerTeams();
    fetchSoccerNews();
});

// Fetch and display College Basketball Scores
function fetchCollegeBasketballScores() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard')
        .then(response => response.json())
        .then(data => {
            const scoresContainer = document.getElementById('college-basketball-scores');
            const games = data.events;

            if (games.length === 0) {
                scoresContainer.innerHTML = "<p>No games available at this moment.</p>";
                return;
            }

            games.forEach(game => {
                const homeTeam = game.competitions[0].competitors[0];
                const awayTeam = game.competitions[0].competitors[1];
                const gameStatus = game.status.type.description;

                const gameDiv = document.createElement('div');
                gameDiv.classList.add('game');
                gameDiv.innerHTML = `
                    <h3>${homeTeam.team.displayName} vs ${awayTeam.team.displayName}</h3>
                    <p>${homeTeam.team.shortDisplayName}: ${homeTeam.score}</p>
                    <p>${awayTeam.team.shortDisplayName}: ${awayTeam.score}</p>
                    <p>Status: ${gameStatus}</p>
                `;
                scoresContainer.appendChild(gameDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching College Basketball scores:', error);
            document.getElementById('college-basketball-scores').innerHTML = "<p>Failed to load scores. Please try again later.</p>";
        });
}

// Fetch and display College Basketball Teams
function fetchCollegeBasketballTeams() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams')
        .then(response => response.json())
        .then(data => {
            const teamsContainer = document.getElementById('college-basketball-teams');
            const teams = data.sports[0].leagues[0].teams;

            teams.forEach(teamObj => {
                const team = teamObj.team;
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');
                teamDiv.innerHTML = `
                    <h3>${team.displayName}</h3>
                    <p>Abbreviation: ${team.abbreviation}</p>
                    <p>Location: ${team.location}</p>
                `;
                teamsContainer.appendChild(teamDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching College Basketball teams:', error);
            document.getElementById('college-basketball-teams').innerHTML = "<p>Failed to load teams. Please try again later.</p>";
        });
}

// Fetch and display College Basketball News
function fetchCollegeBasketballNews() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/news')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('college-basketball-news');
            const articles = data.articles;

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerHTML = `
                    <h3>${article.headline}</h3>
                    <p>${article.description}</p>
                    <a href="${article.links.web.href}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching College Basketball news:', error);
            document.getElementById('college-basketball-news').innerHTML = "<p>Failed to load news. Please try again later.</p>";
        });
}

// Fetch all data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchCollegeBasketballTeams();
    fetchCollegeBasketballNews();
});

// Fetch and display College Football Scores
function fetchCollegeFootballScores() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard')
        .then(response => response.json())
        .then(data => {
            const scoresContainer = document.getElementById('college-football-scores');
            const games = data.events;

            if (games.length === 0) {
                scoresContainer.innerHTML = "<p>No games available at this moment.</p>";
                return;
            }

            games.forEach(game => {
                const homeTeam = game.competitions[0].competitors[0];
                const awayTeam = game.competitions[0].competitors[1];
                const gameStatus = game.status.type.description;

                const gameDiv = document.createElement('div');
                gameDiv.classList.add('game');
                gameDiv.innerHTML = `
                    <h3>${homeTeam.team.displayName} vs ${awayTeam.team.displayName}</h3>
                    <p>${homeTeam.team.shortDisplayName}: ${homeTeam.score}</p>
                    <p>${awayTeam.team.shortDisplayName}: ${awayTeam.score}</p>
                    <p>Status: ${gameStatus}</p>
                `;
                scoresContainer.appendChild(gameDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching College Football scores:', error);
            document.getElementById('college-football-scores').innerHTML = "<p>Failed to load scores. Please try again later.</p>";
        });
}

// Fetch and display College Football Teams
function fetchCollegeFootballTeams() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/football/college-football/teams')
        .then(response => response.json())
        .then(data => {
            const teamsContainer = document.getElementById('college-football-teams');
            const teams = data.sports[0].leagues[0].teams;

            teams.forEach(teamObj => {
                const team = teamObj.team;
                const teamDiv = document.createElement('div');
                teamDiv.classList.add('team');
                teamDiv.innerHTML = `
                    <h3>${team.displayName}</h3>
                    <p>Abbreviation: ${team.abbreviation}</p>
                    <p>Location: ${team.location}</p>
                `;
                teamsContainer.appendChild(teamDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching College Football teams:', error);
            document.getElementById('college-football-teams').innerHTML = "<p>Failed to load teams. Please try again later.</p>";
        });
}

// Fetch and display College Football News
function fetchCollegeFootballNews() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/football/college-football/news')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('college-football-news');
            const articles = data.articles;

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');
                articleDiv.innerHTML = `
                    <h3>${article.headline}</h3>
                    <p>${article.description}</p>
                    <a href="${article.links.web.href}" target="_blank">Read more</a>
                `;
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching College Football news:', error);
            document.getElementById('college-football-news').innerHTML = "<p>Failed to load news. Please try again later.</p>";
        });
}

// Fetch all data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchCollegeFootballTeams();
    fetchCollegeFootballNews();
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const body = document.body;

    const sportItems = document.querySelectorAll('.carousel-item');

    sportItems.forEach(item => {
        item.addEventListener('click', () => {
            const selectedSport = item.getAttribute('data-sport');
            body.setAttribute('data-background', selectedSport);
        });
    });

    /* Horizontal scrolling */
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Faster scroll
        carousel.scrollLeft = scrollLeft - walk;
    });
});

// Dark Mode Toggle
var checkbox = document.getElementById('theme-toggle-checkbox');
var themeLabel = document.getElementById('theme-label');
var logo = document.querySelector('.title'); // Assuming the title is used as the logo text

// Check if user has a preference saved in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Add event listener to the checkbox
checkbox.addEventListener('change', function() {
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Function to enable dark mode
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
  localStorage.setItem('dark-mode', 'enabled');
  themeLabel.textContent = 'Light Mode';
  themeLabel.style.color = '#f7f7f7'; // Ensure toggle label is white in dark mode
  logo.style.color = '#f7f7f7'; // Ensure logo is white in dark mode
}

// Function to disable dark mode
function disableDarkMode() {
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');
  localStorage.setItem('dark-mode', 'disabled');
  themeLabel.textContent = 'Dark Mode';
  themeLabel.style.color = '#333'; // Ensure toggle label is dark in light mode
  logo.style.color = '#333'; // Ensure logo is dark in light mode
}

function fetchPointsOverGamesWithPlayers(league, numberOfGames) {
    const leagueUrls = {
        'NFL': 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard',
        'College Football': 'https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard',
        'NBA': 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
        'MLB': 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard',
        'NHL': 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard',
        'WNBA': 'https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard',
        'College Basketball': 'https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard',
        'Soccer': 'https://site.api.espn.com/apis/site/v2/sports/soccer/scoreboard'
    };

    const gameInfoUrls = {
        'NFL': 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/summary?event=',
        'College Football': 'https://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=',
        'NBA': 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=',  
        'MLB': 'https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/summary?event=',
        'NHL': 'https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/summary?event=',
        'WNBA': 'https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/summary?event=',
        'College Basketball': 'https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/summary?event=',
        'Soccer': 'https://site.api.espn.com/apis/site/v2/sports/soccer/summary?event='
    };


    const containerIds = {
        'NFL': 'nfl-scores',
        'NBA': 'nba-scores',
        'College Football': 'college-football-scores',
        'MLB': 'mlb-scores',
        'NHL': 'nhl-scores',
        'WNBA': 'wnba-scores',
        'College Basketball': 'college-basketball-scores',
        'Soccer': 'mls-scores'
    };

    if (!leagueUrls[league] || !gameInfoUrls[league]) {
        console.error("Invalid league specified.");
        return;
    }

    const containerId = containerIds[league];
    const container = document.getElementById(containerId);

    if (!container) {
        console.error("Container ID not found in HTML:", containerId);
        return;
    }

    fetch(leagueUrls[league])
        .then(response => response.json())
        .then(data => {
            const games = data.events.slice(0, numberOfGames);

            if (games.length === 0) {
                console.log("No games found for", league);
                return;
            }

            container.innerHTML = `<h2>${league} Last ${numberOfGames} Games Points History</h2>`;
            const historyDiv = document.createElement('div');
            historyDiv.className = 'games-history';

            games.forEach(game => {
                const gameId = game.id;
                const homeTeam = game.competitions[0].competitors[0];
                const awayTeam = game.competitions[0].competitors[1];
                const date = new Date(game.date).toLocaleDateString();

                const gameDiv = document.createElement('div');
                gameDiv.className = 'game-history-item';
                gameDiv.innerHTML = `
                    <div class="game-header">
                        <h3>${homeTeam.team.displayName} vs ${awayTeam.team.displayName}</h3>
                        <p class="game-date">${date}</p>
                    </div>
                    <div class="game-score">
                        <p>${homeTeam.team.shortDisplayName}: ${homeTeam.score || '0'}</p>
                        <p>${awayTeam.team.shortDisplayName}: ${awayTeam.score || '0'}</p>
                    </div>
                `;

                // Fetch additional game data for player stats
                fetch(gameInfoUrls[league] + gameId)
                    .then(response => response.json())
                    .then(gameData => {
                        console.log("Fetched game data for", gameId, ":", gameData); // Debug: Check game data structure
                        if (gameData.boxscore && gameData.boxscore.teams) {
                            const playerStatsDiv = document.createElement('div');
                            playerStatsDiv.className = 'player-stats';

                            gameData.boxscore.teams.forEach(team => {
                                const teamStatsDiv = document.createElement('div');
                                teamStatsDiv.className = 'team-stats';
                                teamStatsDiv.innerHTML = `<h4>${team.team.displayName} Top Performers</h4>`;

                                if (team.statistics && team.statistics[0] && team.statistics[0].athletes) {
                                    const topPlayers = team.statistics[0].athletes
                                        .slice(0, 3)  // Show top 3 players for each team
                                        .map(player => {
                                            const points = player.stats && player.stats.points ? player.stats.points : '0';
                                            return `<p>${player.athlete.displayName}: ${points} pts</p>`;
                                        })
                                        .join('');

                                    teamStatsDiv.innerHTML += topPlayers;
                                } else {
                                    teamStatsDiv.innerHTML += "<p>No player stats available</p>";
                                }

                                playerStatsDiv.appendChild(teamStatsDiv);
                            });

                            gameDiv.appendChild(playerStatsDiv);
                        }
                    })
                    .catch(error => console.error("Error fetching player stats:", error));

                historyDiv.appendChild(gameDiv);
            });

            container.appendChild(historyDiv);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            container.innerHTML += '<p class="error">Failed to load points history. Please try again later.</p>';
        });
}

// Call the function to fetch NFL scores and display the latest 5 games
 document.addEventListener("DOMContentLoaded", () => {
            fetchPointsOverGamesWithPlayers("NBA", 5); 
            fetchPointsOverGamesWithPlayers("NFL", 5); 
            fetchPointsOverGamesWithPlayers("NHL", 5); 
            fetchPointsOverGamesWithPlayers("College Football", 5); 
            fetchPointsOverGamesWithPlayers("Soccer", 5); 
            fetchPointsOverGamesWithPlayers("College Basketball", 5); 
            fetchPointsOverGamesWithPlayers("WNBA", 5); 
            fetchPointsOverGamesWithPlayers("MLB", 5); 
});