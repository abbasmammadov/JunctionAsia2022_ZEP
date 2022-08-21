# JunctionAsia2022_ZEP

SETUP

1. Go to the link https://zep.us/play/8lPgbo. 

2. In attendance, there is a mini-game to store the attendance status of students (stored in App.storage)
2.1. Drop the minigame.
2.2. Use one of the below-shown features by typing into the chat (?register and ?reset can only be done by privileged people):
    ?reset - reseting the storage to the empty
    ?register - can only be done by professor (one with privilege) to initialize the attendance status to zero
    ?attendance - done by student in order to get attendance in first 5 minutes of the class (time starts when the mini game dropped), where within 5mins is "attended", within 10 mins is "late", and the rest is "absent"
    ?show - visualizing the results 
    ?stop - finishin the attendance and setting the rest of the students as "absent"
    ?test - checking whether minigame is working properly
2.3. Terminate the minigame.

3. Transcript is a Normal app which can be initialized via Map editor.
3.1. Move the character to the in front of any computer in lecture room and click the button "Z" to see your grades :)

4. In order to watch the lecture videos, go in front of computers 1, 3, 5, or 8 and press "F" to start your amazing Machine Learning Course from Stanford.


INTRODUCTION AND DETAILED DESCRIPTION OF THE ENVIRONMENT

Due to COVID, the world saw the potential of online education. Since then the number of online universities degrees and educational platforms skyrocketed with a student body of 92 million as of 2021. COVID showed us the crisis and since there is no guarantee that a similar pandemic won’t take place in the future we must be prepared so that education never stops for anyone.

Although online courses provide flexibility, it lacks the interaction of an offline class. Gradually, students lose motivation and their performance deteriorates. Our main goal is integrating an extremely interactive Metaverse like ZEP with online education services enabling students to utilize the existing flexibility, have separate group study sessions, socialize with classmates and solidify concepts utilizing the office hours with professors. This project is both scalable and has huge potential due to being a first mover in the blue ocean market, and due to the growing number of online education services striving to be more interactive. ZEPAdemics can provide  the required leverage and be the future of Online Education.

ZEPAdemics is a Metaverse where universities and online education platforms will come together. Our current development is restricted to only one university: Stanford University, but it is easily scalable with the tools provided by Zep. The overall design in shown below:

![1](https://user-images.githubusercontent.com/101348852/185772382-e6ca876a-7cd5-4746-a553-a40228c6a6d9.png)

As mentioned before we currently have implemented only one campus but evidently in future this can be extended to add more and more campuses as required. So lets get into the details of our Stanford campus in the Zep Metaverse.

We have four most important sections in our ZEPAdemics Metaverse: Main lecture room, Seminar rooms, office hour rooms, lobby. Each of them plays a unique crucial role for smooth operation of ZEPAdemics. Details of each of these rooms are discussed below:

**Main Lecture room**

![2](https://user-images.githubusercontent.com/101348852/185772390-d58e8935-4a04-488a-a64f-2c9d397ce7a2.png)

This is where the magic happens where students come together to attend their individual courses according to their own speed. Each student will be able to watch his lectures from the desktops and progress through the course. All videos are independent of each other and hence each student can enjoy his own time to watch and digest the lectures.

**Seminar rooms**

![Untitled](https://user-images.githubusercontent.com/101348852/185772393-8876345f-7300-4281-9afe-28d0c755a4e0.png)

Seminar rooms are rooms for group study for a project or a concept. Here a group of students can gather and watch a lecture together via screensharing feature of Zep and then pause and discuss as necessary. We have set this room up in such a way that **ONLY** the participants of this room can see the shared screen and not the rest of the people on campus. This is extremely useful for building a better understanding of concepts with peers. 

Office hours rooms

![4](https://user-images.githubusercontent.com/101348852/185772394-98d9d574-b1f0-4d13-ae06-b61a7207e25e.png)

To enhance the real life university experience we have real-time office hours in ZEPAdemics. This is something that will take place in real time between students  and TAs/Professors. The professor shares his screen here to discuss the problems faced by the students. The screen can only  be viewed by the participant in the room(professor/TA and Student) so that each student can get all his problems solved personally. 

Lobby:

<img width="523" alt="Screen Shot 2022-08-21 at 11 15 23 AM" src="https://user-images.githubusercontent.com/101348852/185772424-a4690691-f2bf-4bb9-8a60-08ced51b1c87.png">

As the name suggests this is the place where the students can come to interact and socialize with each other.
