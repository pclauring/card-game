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
            List<int> indexList = Enumerable.Range(1, 52).ToList();

            //Shuffle card indexs with Fisher-Yates algorithm
            Random r = new Random();
            int n = indexList.Count;
            while (n > 1)
            {
                n--;
                int k = r.Next(n + 1);
                int value = indexList[k];
                indexList[k] = indexList[n];
                indexList[n] = value;
            }

            List<Card> cards = new List<Card>();
            int cardIndexCounter = 0;
            foreach (var suit in suits)
            {
                for (int i = 1; i < 14; i++)
                {
                    cards.Add(new Card
                    {
                        Id = suit + "-" + i.ToString(),
                        Suit = suit,
                        Value = i,
                        Location = "DECK",
                        Index = indexList[cardIndexCounter]
                    });
                    cardIndexCounter++;
                }
            }


            //Turn phases 
            List<string> turnPhases = new List<string> { "Upkeep", "Draw", "Main", "End" };
            //Empty discard
            List<Card> discard = new List<Card>();
            return new Game
            {
                Deck = cards.OrderBy(card => card.Index).ToList(),
                Discard = discard,
                TurnPhases = turnPhases
            };
        }

        public class Game
        {
            public List<Card> Deck { get; set; }

            public List<Card> Discard { get; set; }

            public List<string> TurnPhases { get; set; }
        }

        public class Card
        {
            public string Id { get; set; }
            public string Suit { get; set; }
            public int Value { get; set; }
            public string Location { get; set; }
            public int Index { get; set; }
        }
    }
}
