using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace card_game.Controllers
{
    [Route("api/[controller]")]
    public class GameController : Controller
    {

        [HttpGet("[action]")]
        public Game loadGame()
        {
            string[] cards = new string[] {"1","2","3","4"};
            return new Game
            {
                Cards = cards
            };
        }

        public class Game
        {
            public string[] Cards { get; set; }
        }
    }
}
