using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using card_game.Models;
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
            //List<int> indexList = Enumerable.Range(1, 52).ToList();

            //Random r = new Random();
            //int n = indexList.Count;
            //while (n > 1)
            //{
            //    n--;
            //    int k = r.Next(n + 1);
            //    int value = indexList[k];
            //    indexList[k] = indexList[n];
            //    indexList[n] = value;
            //}

            //Shuffle Cards Fisher-Yates algorithm
            List<Card> cards = new List<Card>();
            //int cardIndexCounter = 0;
            foreach (var suit in suits)
            {
                for (int i = 1; i < 14; i++)
                {
                    cards.Add(new Card
                    {
                        Id = suit + "-" + i.ToString(),
                        Suit = suit,
                        Value = i,
                    });
                   // cardIndexCounter++;
                }
            }

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

            //Turn phases 
            List<string> turnPhases = new List<string> { "Draw", "Play" };
            //Empty discard
            List<Card> discard = new List<Card>();
            //Player setup
            Player player1 = new Player();
            player1.Id = 1;
            player1.Discard = new List<Card>();
            player1.Board = new List<Card>();
            player1.Deck = new List<Card>();
            player1.Hand = new List<Card>();

            Player player2 = new Player();
            player2.Id = 2;
            player2.Discard = new List<Card>();
            player2.Board = new List<Card>();
            player2.Deck = new List<Card>();
            player2.Hand = new List<Card>();

            //Splitting the shuffled deck between two players
            player1.Deck = cards.GetRange(0, 26);
            player2.Deck = cards.GetRange(25, 26);

            return new Game
            {
                Deck = cards.OrderBy(card => card.Index).ToList(),
                Discard = discard,
                TurnPhases = turnPhases,
                PhaseNumber = 2,
                PlayerNumber = 2,
                Player1 = player1,
                Player2 = player2
            };
        }
    }
}
