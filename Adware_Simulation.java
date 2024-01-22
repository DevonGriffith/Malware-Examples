// Created January 21st, 2024 - By: Devon Griffith A.K.A. rootPHAGE / 我爱数据
// Compile on Windows [ javac <path to file>\Adware_Simulation.java ]
// Run on Windows [ java <path to file>\Adware_Simulation.java ]
// A Java cross-platform script that is designed to wait a set amount of time and then display a popup
// in the center of the screen as if it were a harmless notification from your computer, but it contains more malware

//  Here we have our needed import statements, the libraries: swing, awt, Timer (from util), and TimerTask (also from util)
import javax.swing.*;
import java.awt.*;
import java.util.Timer;
import java.util.TimerTask;


//  This is our class that defines the Adware
public class AdwareSimulation {

    public static void main(String[] args) {
        //  Schedule the adware to pop up after 30 seconds
        Timer timer = new Timer();
        timer.schedule(new ShowAdTask(), 1, 30000);
    }

    static class ShowAdTask extends TimerTask {
        public void run() {
            // Create and set up the window for the ad
            JFrame frame = new JFrame("Adware Simulation Ad");  // This is where the content of the adware pop up would go
            frame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);  // How it closes
            frame.setSize(300, 200);  // Define the size of the pop up

            // Add content to the window (your ad content here)
            JLabel textLabel = new JLabel("<html><center>This is a simulated ad.<br>Remember, real adware can be intrusive!</center></html>", SwingConstants.CENTER);
            textLabel.setPreferredSize(new Dimension(300, 100));
            frame.getContentPane().add(textLabel, BorderLayout.CENTER);

            // Display the window
            frame.setLocationRelativeTo(null); // Center the window
            frame.setVisible(true);
        }
    }
}

//  DO NOT USE THIS SCRIPT MALICIOUSLY - PROVIDED FOR EDUCATIONAL PURPOSES ONLY
