type Props = {
  itemId: String,
  item: any
}

const item = {
  id: "123",
  name: "example item",
  category: "stuff",
  description: "this is an example item",
  photos: [],
  address: "this is a test address",
  pickup: true,
  shipping: true,
}

export default function UserProfileItem({ item }: Props) {

  var claimedDonation =
    "https://img.freepik.com/premium-vector/donation-box-quarantine-time_291916-2.jpg?w=2000";

  return (
    <div>
    </div>
  );
}