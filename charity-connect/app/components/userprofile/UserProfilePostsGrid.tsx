import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";




type Props = {
  postedItemIds: any[]
  claimedItemIds: any[]
  id: String
  showPostedDonations: Boolean
}


// id: String,
// name: String,
// category: String,
// description: String,
// photos: String[],
// address: String,
// status: String,
// posterId: String,
// claimerId: null

interface IPostListProps {
  postData: {
    id: String,
    items: any[]
  }
}


const PostedItemsList = (props: IPostListProps) => {
  const { items, id } = props.postData;

  return (
    <div>
      <Link href="/donate">
        <button className="cursor-pointer w-24 text-md rounded-lg bg-gray-500 flex justify-center  text-white">
          Create New Post
        </button>
      </Link>
      {items.map((item) => {
        if (item.posterId === id) {
          return <Link key={item.id} href={`/itempage?item=${item?.id}`}>
            <div className="mb-8">
              <div>{item?.name}</div>
              <div>{'status: ' + item?.status}</div>
              <Image src={item?.photos[0]} alt='image' height={200} width={200} />
            </div>
          </Link>
        }
      })}
    </div>
  )

};

const ClaimedItemsList = (props: IPostListProps) => {
  const { items, id } = props.postData;

  return (
    <div>
      {items.map((item) => {
        if (item.claimerId === id) {
          return <Link key={item.id} href={`/itempage?item=${item?.id}`}>
            <div className="mb-4">
              <div className="">{item?.name}</div>
              <div>{'status: ' + item?.status}</div>
              <Image src={item?.photos[0]} alt='image' height={200} width={200} />
            </div>
          </Link>
        }
      })}
    </div>
  )

};



export default function UserProfilePostsGrid({ postedItemIds, claimedItemIds, id, showPostedDonations }: Props) {
  const items = {
    id: id,
    items: [
      {
        id: '64a07a1f4425cf31f6b98110',
        name: 'Pokemon Toys',
        category: 'Toys and Games',
        description: " Pokémon is a beloved franchise that has captivated the hearts of millions around the world. It all began in 1996 when Game Freak, in collaboration with Nintendo, introduced the world to a vibrant universe filled with extraordinary creatures known as Pokémon. In this imaginative world, humans called Pokémon Trainers embark on thrilling journeys, aiming to catch, train, and battle with these incredible creatures. Each Pokémon possesses unique abilities, characteristics, and elemental types, which add depth and strategy to the intense battles that unfold. From the fire-breathing Charizard to the electric powerhouse Pikachu, there are over 800 distinct species of Pokémon, each with its own strengths, weaknesses, and evolutionary paths. Trainers explore diverse regions, encounter fascinating characters, and forge deep bonds with their Pokémon partners as they strive to become Pokémon Champions. Pokémon has become more than just a game; it's a cultural phenomenon that has expanded into animated TV shows, movies, trading card games, and a vast array of merchandise. With its enduring charm, captivating stories, and the message of friendship and perseverance, Pokémon continues to inspire and bring joy to trainers of all ages worldwide.",
        photos: [
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'
        ],
        address: '506 23rd ave San Francisco California 94121',
        status: 'Available',
        posterId: '64a07a1f4425cf31f6b98110',
        claimerId: null
      },
      {
        id: '64a07fdb702637cd9ef00cae',
        name: 'Ginger Bread Mans!',
        category: 'Homegoods',
        description: 'Ginger Bread Mans!!! For all who love them cookies!',
        photos: [
          'https://sugarspunrun.com/wp-content/uploads/2021/11/Gingerbread-Cookies-1-of-1.jpg',
          'https://sugarspunrun.com/wp-content/uploads/2021/11/Gingerbread-Cookies-1-of-7.jpg'
        ],
        address: '1690 John F Kennedy Dr, San Francisco, CA 94121',
        status: 'Available',
        posterId: '64a07a1f4425cf31f6b98110',
        claimerId: null
      },
      {
        id: '64a0815e702637cd9ef00cb5',
        name: 'Violin For Free',
        category: 'Homegoods',
        description: 'For all you music lovers out there, I have a spare violin for free!!!',
        photos: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBz_Nhv7Ku1WfU8eteMFrxYhdaC3YW9soRTw&usqp=CAU'
        ],
        address: '941 Cole St, San Francisco, CA 94117',
        status: 'Available',
        posterId: '64a07a1f4425cf31f6b98110',
        claimerId: null
      },
      {
        id: '64a0856e0ba6c7795ab65738',
        name: 'Big Sponge',
        category: 'Supplies',
        description: 'Who lives in a pineapple under the sea?',
        photos: [
          'https://res.cloudinary.com/dtnugkazh/image/upload/v1688241437/wv5jouqiyfnpijnlse62.png'
        ],
        address: 'Hawaii Kai Dr, Honolulu, HI 96825, USA',
        status: 'Pending',
        posterId: '64a07a8e4425cf31f6b98111',
        claimerId: '64a07a8e4425cf31f6b98111'
      },
      {
        id: '64a09858cc19995ed7440c16',
        name: 'Big Star',
        category: 'Hobbies',
        description: 'Who lives under a rock under the sea?',
        photos: [
          'https://res.cloudinary.com/dtnugkazh/image/upload/v1688246315/akxmvbx5h0pjlp71n5gc.png'
        ],
        address: '234 92nd St, Brooklyn, NY 11209',
        status: 'Pending',
        posterId: '64a07a8e4425cf31f6b98111',
        claimerId: '64a07a8e4425cf31f6b98111'
      },
      {
        id: '64a829426b7557ed820a13ab',
        name: 'Cookies!',
        category: 'Homegoods',
        description: " In a heartwarming act of kindness, a cookie donation initiative seeks to spread joy and satisfy the craving for both compassion and sweetness. Every delectable bite holds the power to make a difference. These mouthwatering treats, baked with love and care, are offered to those in need—brightening their day and providing a momentary escape from life's challenges. From homeless shelters to community centers, these cookies serve as a symbol of empathy, reminding us of the power of small gestures. Join this benevolent effort and let the shared delight of cookies foster connections, warm souls, and create a ripple of kindness in the world.",
        photos: [
          'https://static.vecteezy.com/system/resources/previews/003/347/762/original/illustration-of-evil-chocolate-chip-cookie-mascot-character-free-vector.jpg',
          'https://cdn.shopify.com/s/files/1/0622/6870/2966/products/AD9097AC-1D06-40EB-9377-242CD44B23A8_580x.jpg?v=1643641470'
        ],
        address: '5604 7th Ave 1st Floor, Brooklyn, NY 11220',
        status: 'Available',
        posterId: '64a07a1f4425cf31f6b98110',
        claimerId: null
      },
      {
        id: '64a832726b7557ed820a13b9',
        name: 'Blankets for Free!',
        category: 'Homegoods',
        description: 'Embrace the spirit of compassion by participating in a heartwarming initiative to donate blankets. These cozy, soft blankets serve as a shield against the cold, offering a source of solace and comfort to those in need. With each donation, you provide a warm embrace to individuals facing adversity, offering them a tangible reminder that they are not alone. From homeless shelters to disaster relief efforts, these blankets become a beacon of hope, wrapping recipients in a blanket of love and care. Join this noble endeavor and help create a world where warmth and kindness prevail, one blanket at a time.',
        photos: [
          'https://www.realsimple.com/thmb/6Qa3O4RXoQU0jV51_RLKfUP1nlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bedsure-fleece-blanket-throw-tout-df36d63f04ce4e3692b14e53fe3cf990.jpg',
          'https://cdn.thewirecutter.com/wp-content/media/2023/01/throw-blankets-2048px-09089-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024'
        ],
        address: '1080 McDonald Ave, Brooklyn, NY 11230',
        status: 'Available',
        posterId: '64a07a8e4425cf31f6b98111',
        claimerId: null
      },
      {
        id: '64a8342f6b7557ed820a13c3',
        name: 'Nintendo Switch',
        category: 'Toys and Games',
        description: "Unlock the power of play by participating in an extraordinary initiative to donate Nintendo Switch consoles. These immersive gaming devices hold the key to endless adventures, captivating storytelling, and unforgettable moments of laughter and camaraderie. By contributing a Nintendo Switch, you open up a world of possibilities for those who may not have had access to such interactive entertainment before. From children's hospitals to community centers, these donations bridge gaps, foster inclusivity, and ignite smiles. Join this remarkable campaign and help empower individuals to explore new worlds, forge friendships, and experience the transformative power of gaming. Together, let's bring joy and connection to those who need it most.",
        photos: [
          'https://static.independent.co.uk/2022/10/18/10/Nintendo%20Switch%20deals%20copy.jpg',
          'https://cdn.mos.cms.futurecdn.net/P7fAM2JYVaUeMATqRKxbjL-480-80.jpg'
        ],
        address: '620 Atlantic Ave, Brooklyn, NY 11217',
        status: 'Available',
        posterId: '64a07a8e4425cf31f6b98111',
        claimerId: null
      },
      {
        id: '64a835b16b7557ed820a13ca',
        name: 'One Teddy Bear',
        category: 'Toys and Games',
        description: 'Embrace the power of compassion by joining a heartfelt initiative to donate Teddy bears. These cuddly companions bring immense comfort and solace, providing a source of warmth and security to those in need. Each Teddy bear donation becomes a cherished friend, offering a listening ear and a comforting presence during challenging times. From hospitals to orphanages, these soft and huggable gifts bring smiles to faces young and old, reminding recipients that they are cared for and loved. Join this touching endeavor and help create a world where every child and adult can find solace and reassurance in the embrace of a Teddy bear.',
        photos: ['https://m.media-amazon.com/images/I/71qtAiNUCpL.jpg'],
        address: '1601 80th St, Brooklyn, NY 11214',
        status: 'Available',
        posterId: '64a07a8e4425cf31f6b98111',
        claimerId: null
      },
      {
        id: '64a8e25cc4df02a1d5babf9e',
        name: 'Test',
        category: 'Apparel',
        description: 'We redirecting to items BABY',
        photos: [
          'https://res.cloudinary.com/dtnugkazh/image/upload/v1688789555/lavtk9jgjtnh7ucjdz5u.png',
          'https://res.cloudinary.com/dtnugkazh/image/upload/v1688789555/enwv0gqvnldw8orpxrqu.png',
          'https://res.cloudinary.com/dtnugkazh/image/upload/v1688789555/b99dhdhxjduc9dgmkohl.jpg'
        ],
        address: 'CA-1, San Francisco, CA, USA',
        status: 'Available',
        posterId: '64a07a1f4425cf31f6b98110',
        claimerId: null
      }
    ]
  };

  return (
    <div className="flex justify-center">
      {showPostedDonations ? <PostedItemsList postData={items} /> : <ClaimedItemsList postData={items} />}
    </div>
  )
}

