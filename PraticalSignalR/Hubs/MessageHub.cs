﻿using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PraticalSignalR.Hubs
{
    public class MessageHub : Hub
    {
        public async Task SendMessageAll(string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
}
