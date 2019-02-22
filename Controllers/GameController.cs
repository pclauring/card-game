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
            string[] suits = new string[] { "Hearts", "Diamonds", "Clubs", "Spades" };
            //Make sample deck
            List<Card> cards = new List<Card>();
            foreach (var suit in suits)
            {
                for (int i = 1; i < 14; i++)
                {
                    cards.Add(new Card
                    {
                        id = suit + "-" + i.ToString(),
                        Suit = suit,
                        Value = i,
                    });
                }
            }

            //Shuffle Cards Fisher-Yates algorithm
            Random r = new Random();
            int n = cards.Count;
            while (n > 1)
            {
                n--;
                int k = r.Next(n + 1);
                Card value = cards[k];
                cards[k] = cards[n];
                cards[n] = value;
            }

            return new Game
            {
                Deck = cards,
            };
        }

        public class Game
        {
            public List<Card> Deck { get; set; }

            public List<Card> Discard { get; set; }
        }
    }

    public class Card
    {
        public string id { get; set; }
        public string Suit { get; set; }
        public int Value { get; set; }
    }


}
