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
            string[] suits = new string[] {"Hearts","Diamonds","Clubs","Spades"};
            //Make sample deck
            List<Card> cards = new List<Card> ();
            Random random = new Random();
            foreach (var suit in suits)
            {
                int cardValue = random.Next(0,10);
                cards.Add(new Card{
                    id = suit + "-" + cardValue.ToString(),
                    Suit = suit,
                    Value = cardValue,
            });
            }
            

            return new Game
            {
                Deck = cards
            };
        }

        public class Game
        {
            public List<Card> Deck { get; set; }
        }
    }

    public class Card
    {
        public string id {get; set;}
        public string Suit {get; set;}
        public int Value {get; set;}
    }
}
