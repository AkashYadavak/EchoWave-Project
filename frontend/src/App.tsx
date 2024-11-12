import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "./components/ui/button";


function App() {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton>
            <Button className="m-4 bg-green-400" >Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </>
  );
}

export default App
