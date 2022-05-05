import React, { useState } from "react";

// import { render } from "react-dom";
import _ from "lodash";
import {
  Button,
  Card,
  Divider,
  Image,
  Placeholder,
  Header,
  Icon,
  Modal,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    avatar: require('../assets/images/jessa.jpg'),   
    position: "President",
    name: "Jessa Mae E. Dabon",
    description: "Vote for me!",
  },
  {
    id: 2,
    avatar: require('../assets/images/andres.jpg'),
    position: "President",
    name: "Andres Edman G. Olario ",
    description: "I can make our country great again!",
  },
  {
    id: 3,
    avatar: require('../assets/images/harlie.jpg'),
    position: "Vice President",
    name: "Harlie Quin Marc C. Quipit ",
    description: "I can make our country great again!",
  },
  {
    id: 4,
    avatar: require('../assets/images/emman.jpg'),
    position: "Vice President",
    name: "Lord Emmanuel C. Figueras",
    description: "I can make our country great again!",
  },
  {
    id: 5,
    avatar: require('../assets/images/ryle.jpg'),
    position: "Secretary",
    name: "Edyr Ryle G. Ilisan",
    description: "I can make our country great again!",
  },
  {
    id: 6,
    avatar: require('../assets/images/kissy.jpg'),
    position: "Secretary",
    name: "Kissy Cyrine A. Garciano",
    description: "I can make our country great again!",
  },
  {
    id: 7,
    avatar: require('../assets/images/cathy.jpg'),
    position: "InfoMedia",
    name: "Cathylyn Shaine P. Olandre",
    description: "I can make our country great again!",
  },
  {
    id: 8,
    avatar: require('../assets/images/lucy.jpg'),
    position: "InfoMedia",
    name: "Lucy Mae Tan",
    description: "I can make our country great again!",
  },
  {
    id: 9,
    avatar: require('../assets/images/heart.jpg'),
    position: "Public Relations and Communications",
    name: "Chris Heart E. Blanco",
    description: "I can make our country great again!",
  },
  {
    id: 10,
    avatar: require('../assets/images/wena.jpg'),
    position: "Public Relations and Communications",
    name: "Wena Mae V. Mabasa",
    description: "I can make our country great again!",
  },
  {
    id: 11,
    avatar: require('../assets/images/ruel.jpg'),
    position: "Public Relations and Communications",
    name: "Ruel Dean Buray",
    description: "I can make our country great again!",
  },
  {
    id: 12,
    avatar: require('../assets/images/abby.jpg'),
    position: "Budget and Finance",
    name: "Abby Kate V. Dela Peña",
    description: "I can make our country great again!",
  },
  {
    id: 13,
    avatar: require('../assets/images/ruffa.jpg'),
    position: "Budget and Finance",
    name: "Ruffa Mae L. Arañez",
    description: "I can make our country great again!",
  },
  {
    id: 14,
    avatar: require('../assets/images/piolo.jpg'),
    position: "Material Preparation and Services",
    name: "John Piolo H. Mutia",
    description: "I can make our country great again!",
  },
  {
    id: 15,
    avatar: require('../assets/images/keith.jpg'),
    position: "Material Preparation and Services",
    name: "Keith M. Ostia",
    description: "I can make our country great again!",
  },
  {
    id: 16,
    avatar: require('../assets/images/mark.jpg'),
    position: "Logistics",
    name: "Mark Chezter M. Barcelo",
    description: "I can make our country great again!",
  },
  {
    id: 17,
    avatar: require('../assets/images/aliza.jpg'),
    position: "Logistics",
    name: "Aliza Nicole M. Gumapac",
    description: "I can make our country great again!",
  },
  

];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [voteForA, setVoteForA] = useState(0);
  const [voteForB, setVoteForB] = useState(0);
  const [voted, setVoted] = useState(false);
  const [open, setOpen] = useState(false);
  const [openVoted, setOpenVoted] = useState(false);

  // const handleLoadingClick = () => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // };

  const submitVote = () => {
    axios
      .post("https://5fa5e7ad085bf700163de0f9.mockapi.io/vote", {
        partyA: voteForA,
        partyB: voteForB,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      {/* <Button loading={loading} onClick={handleLoadingClick} primary>
        Simulate loading
      </Button> */}

      {/* 0- 0 */}
      <div>
        {voteForA} - {voteForB}
      </div>
      <Divider />
      <Card.Group doubling itemsPerRow={3} stackable>
        {_.map(cards, (card) => (
          <Card key={card.name}>
            {loading ? (
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            ) : (
              <Image src={card.avatar} />
            )}

            <Card.Content>
              {loading ? (
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line length="very short" />
                    <Placeholder.Line length="medium" />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              ) : (
                <>
                  <Card.Header>{card.name}</Card.Header>
                  <Card.Meta>{card.position}</Card.Meta>
                  <Card.Description>{card.description}</Card.Description>
                </>
              )}
            </Card.Content>

            <Card.Content extra>
              <Button
                disabled={voted}
                onClick={() => [
                  card.id === 1
                    ? setVoteForA(voteForA + 1)
                    : setVoteForB(voteForB + 1),
                  setVoted(true),
                  setOpen(true),
                ]}
                primary
              >
                Vote
              </Button>
              <Button
                disabled={
                  (card.id === 1 && voteForA <= 0 ? true : false) ||
                  (card.id === 2 && voteForB <= 0 ? true : false)
                }
                onClick={() => [
                  card.id === 1
                    ? setVoteForA(voteForA - 1)
                    : setVoteForB(voteForB - 1),
                  setVoted(false),
                ]}
              >
                Unvote
              </Button>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
        // trigger={<Button>Basic Modal</Button>}
      >
        <Header icon>
          <Icon name="archive" />
          You are about to vote for this party
        </Header>
        <Modal.Content>
          <p>Are you sure this party is the best one?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => setOpen(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button
            color="green"
            inverted
            onClick={() => [setOpen(false), submitVote(), setOpenVoted(true)]}
          >
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
      <Modal
        basic
        onClose={() => setOpenVoted(false)}
        onOpen={() => setOpenVoted(true)}
        open={openVoted}
        size="small"
        // trigger={<Button>Basic Modal</Button>}
      >
        <Header icon>
          <Icon name="archive" />
          You have voted!
        </Header>
        <Modal.Content>
          <h4>Thanks! Want to see the result now?</h4>
        </Modal.Content>
        <Modal.Actions>
          <Button
            basic
            color="red"
            inverted
            onClick={() => [
              setOpenVoted(false),
              setOpen(false),
              window.location.reload(),
            ]}
          >
            <Icon name="remove" /> No
          </Button>
          <Link to="/result">
            <Button
              color="green"
              inverted
              onClick={() => [setOpenVoted(false), setOpen(false)]}
            >
              <Icon name="checkmark" /> Yes
            </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Home;
