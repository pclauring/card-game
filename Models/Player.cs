using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace card_game.Models
{
    public class Player
    {
        public List<Card> Deck { get; set; }

        public List<Card> Discard { get; set; }

        public List<Card> Hand { get; set; }
    }
}
