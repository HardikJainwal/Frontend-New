import withAuthProtection from "./withAuthProtection"

const Dashboard = () => {
  return (
    <div>
      Dashboard it is
    </div>
  )
}

export default withAuthProtection(Dashboard);
