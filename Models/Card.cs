using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace card_game.Models
{
    public class Card
    {
        public string Id { get; set; }

        public string Suit { get; set; }

        public int Value { get; set; }

        public string Location { get; set; }

        public int Index { get; set; }
    }
}
