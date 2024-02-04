// Created, February 4th, 2024 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Run on Windows [ node <path to file>\server.js ]
// [ dotnet run (inside project directory) ]
// A Logic Bomb simulation to highlight the dangers of malicious code inside systems


using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Timers;

namespace LogicBombSimulator
{
    class Program
    {
        private static readonly HttpClient client = new HttpClient();
        private static readonly Random random = new Random();

        static void Main(string[] args)
        {
            ScheduleNextCheck();
            Console.ReadLine(); // Keep the application running
        }

        private static void ScheduleNextCheck()
        {
            // Determine whether to run the check today with a 50/50 chance.
            bool runToday = random.Next(2) == 1; // Generates 0 or 1 randomly.

            if (runToday)
            {
                Console.WriteLine("Logic Bomb check scheduled for today.");
                // Schedule the check for a random time during work hours today.
                int hours = random.Next(9, 17); // Random hour between 9 AM and 5 PM.
                int minutes = random.Next(0, 60); // Random minute.
                int seconds = random.Next(0, 60); // Random second.

                DateTime now = DateTime.Now;
                DateTime scheduledTime = new DateTime(now.Year, now.Month, now.Day, hours, minutes, seconds);

                if (scheduledTime < now)
                {
                    scheduledTime = scheduledTime.AddDays(1); // If time has passed, schedule for the next day.
                }

                double intervalUntilCheck = (scheduledTime - now).TotalMilliseconds;

                Timer timer = new Timer(intervalUntilCheck);
                timer.Elapsed += async (sender, e) => await CheckEmployeeStatus();
                timer.AutoReset = false; // Only run once for the scheduled check.
                timer.Enabled = true;
            }
            else
            {
                Console.WriteLine("Logic Bomb check will not run today.");
                // Schedule to re-evaluate whether to run the check at midnight, for the next day.
                DateTime now = DateTime.Now;
                DateTime nextMidnight = now.AddDays(1).Date;

                double intervalUntilNextDay = (nextMidnight - now).TotalMilliseconds;

                Timer timer = new Timer(intervalUntilNextDay);
                timer.Elapsed += (sender, e) => ScheduleNextCheck();
                timer.AutoReset = false; // Only run once for scheduling the next check.
                timer.Enabled = true;
            }
        }

        private static async Task CheckEmployeeStatus()
        {
            var payload = new StringContent("{\"employeeID\":\"12345\", \"password\":\"password\"}", Encoding.UTF8, "application/json");
            try
            {
                var response = await client.PostAsync("http://localhost:3000/login", payload);
                if (!response.IsSuccessStatusCode)
                {
                    Console.WriteLine("Logic Bomb Triggered: Access Denied. This could have been a malicious action. Please use programming skills ethically.");
                    // Optionally, schedule the next check or stop.
                }
                else
                {
                    Console.WriteLine("Employee status check successful.");
                    // Optionally, schedule the next check or stop.
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}

// DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
