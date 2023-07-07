
type Props = {
  onShowDonationClick: () => any
}


export default function ProfileMenu({ onShowDonationClick }: Props) {
  return (
    <div className="m-2">
      <span onClick={onShowDonationClick}>Posted</span>
      <span> | </span>
      <span onClick={onShowDonationClick}>Claimed</span>
      <span> | </span>
      <span>Chats</span>
    </div>
  )
}