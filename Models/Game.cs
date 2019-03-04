using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace card_game.Models
{
    public class Game
    {
        public List<Card> Deck { get; set; }
        public List<Card> Discard { get; set; }
        public List<string> TurnPhases { get; set; }
        public int PhaseNumber { get; set; }
        public int PlayerNumber { get; set; }
        public List<Card> Board { get; set; }
    }
}
