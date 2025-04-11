import withAuthProtection from "./withAuthProtection"

const TestPage = () => {
  return (
    <div className="text-center p-5 text-3xl">
      this is a test page
    </div>
  )
}

export default withAuthProtection(TestPage);
