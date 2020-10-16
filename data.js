



export default [
    {
        id: 'boring-house',
        title: 'The Boring House',
        // map: {
        //     top: '89%',
        //     left: '44%'
        // },
        image: '',
        description: `
        These people clearly don't celebrate Halloween BUT there is candy on the front porch! 
        The bowl of candy is just sitting there on a chair. What do you do?
    `,
        choices: [{
            id: 'take-it-all',
            description: 'Grab the whole bowl and run!',
            result: `
            Suits them right for just leaving candy out like that! You grab the bowl and turn
            to run. As you reach the sidewalk a gang of fellow trick-or-treaters is walking towards
            you, and the know what you've done. One of them grabs your arm and pushes you down, tearing
            a hole in your costume. Another grabs the bowl from you and they all walk off, leaving
            you bruised up with a busted costume and no candy.
        `,
            chp: -10,
            candy: 0
        }, {
            id: 'take-one-piece',
            description: 'Be honest and just take a piece or two.',
            result: `
            Yea, it's lame that they're not even home to hand out candy but at least they put some
            out to begin with. You walk up and grab a piece and realize they're only single hershey's
            kisses so you grab a few, toss them in your bag and walk on.
        `,
            chp: 0,
            candy: 5
        }, {
            id: 'roll-the-yard',
            description: 'Play a trick: roll the yard',
            result: `
            These people aren't home and there's nobody around, so what a great time to put that
            toilet paper your brought with you to use. There are a few trees in the front yard, so you 
            run around, tossing the roll of tp over the trees, and run around each one a couple of 
            times to give them some much needed decor. To your surprise though, a cop car quietly
            pulls up and two officers get out. It turns out their neighbors across the street saw
            you and they called it in. BUSTED. Looks like you're getting an escort home!
        `,
            chp: 0,
            candy: 0
        }]
    },
    {
        id: 'old-lady',
        title: 'The Friendly Ghost',
        // map: {
        //     top: '89%',
        //     left: '44%'
        // },
        image: '',
        description: `
            This house has some decorations but it's clear they're not out to scare off 
            anyone. The hard is filled with smiling little inflatable ghost and there is some
            fake cobwebb around the door. You give a knock and a nice older lady answers. She
            thinks your costume is cute and has a GIANT bowl of candy in her hands. She grabs one 
            and offers it to you. What do you do?
        `,
        choices: [{
            id: 'accept-candy',
            description: 'Smile and accpet the candy',
            result: `
                She seems nice enough, and afterall, these are your neighbors so you accept
                the candy and tell her thanks. As you start to turn and walk off she calls 
                at you to stop, reaches back in to her bowl and gives you another handful. 
                SCORE!
            `,
            chp: 0,
            candy: 15
        }, {
            id: 'scare-her',
            description: 'Scare her!',
            result: `
                You get upset at her comment that your costume is cute, and besides, she's got
                a big ole' bowl of candy, so you hold your bag forward as if to accept her candy, 
                and then whe she's just about to drop it in you jump at her and yell "BOOOO!' It works, 
                and she jumps back causing some of her candy to fall to the ground. She slams the door
                immediately. You grab the candy and move on.
            `,
            chp: 0,
            candy: 5
        }, {
            id: 'sillystring',
            description: 'Play a trick.',
            result: `
                The candy looks good but you're out for mischief tonight. As she reaches to 
                give you the candy you grab the silly-string from your back pocket and start
                to spray it at her. Caught off guard you get her but clearly upset she draws 
                hand with the candy back and promptly slams the door. You're laughing so hard 
                as you walk off that you forget there's a step down and you trip, falling and 
                tearing your costume.
            `,
            chp: -10,
            gold: 0
        }]
    },
    {
        id: 'haunted-house',
        title: 'The Haunted House',
        // map: {
        //     top: '89%',
        //     left: '44%'
        // },
        image: '',
        description: `
            This house has it all! The yard is covered in gravestones with skeletons popping 
            up out of the grass. There is fog and cobwebb everywhere as well as spookey music 
            playing, and it's dark. REAL dark. You can make out a silhouette of someone or something 
            sitting on a chair on the front porch. As you get closer you realize it's a human body 
            but with a jack-o-lantern for a head. You find that it appears to be stuffed with hay 
            as your investigate it. You knock at the door and a man dressed as Frankenstein opens  
            the door. He's holding a bucket of candy and he asks, "what are you supposed to be?"

        `,
        choices: [{
            id: 'accept-candy',
            description: 'Give him and anser and ask for some candy.',
            result: `
                Well, it's not the question you want to hear, but it's clear that these people
                take things to another level here, so perhaps it's warranted. Besides, he's huge 
                and his costume is legit, so you decide it's better to just take what you can get. 
                You answer him and he reaches out with a handful of candy and drops it in your bag. 
                As you turn to leave the jack-o-lantern you thought was fake starts to standup from 
                it's chair. It scares the hell out of you so you take off running!
            `,
            chp: 0,
            candy: 10
        }, {
            id: 'egg-him',
            description: 'Play a trick!',
            result: `
                A wise-guy, huh? You've got just the thing for him. You take a few steps back and reach 
                into your candy bag and pull out an egg. He didn't expect that but he knows what's coming! 
                You rear back and launch the egg at him, but it mostly misses him and hits the door, splattering 
                some egg on him. Now he's pissed though. He drop the candy bowl and comes running out of the house. 
                You take off equally as fast and luckily you get away, but not after breaking a sweat!
            `,
            chp: 0,
            candy: 0
        }, {
            id: 'ask-for-more',
            description: 'Ask him for more.',
            result: `
                "Come on man", you exclaim. "Look at all that candy you have, surely you can spare 
                some more." He's not going for it though. "If you don't like this, you're definitely 
                not going to like the other option", he replies. "Try me", you say. He steps towards you 
                but in an effort to not appear scared, which you are, you stand your ground. He reaches into 
                your bag of candy and pulls out a handful. Before you realize what's happened he's already 
                stepped back inside and slammed the door. I guess he was right...
            `,
            chp: 0,
            candy: -5
        }]
    }];