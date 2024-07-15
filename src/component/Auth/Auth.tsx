import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

interface AuthProps {
  onClose: () => void; // Prop untuk menutup dialog
}

const Auth: React.FC<AuthProps> = ({ onClose }) => {
  const [open, setOpen] = React.useState(false);

  // Toggle untuk membuka dan menutup dialog
  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Handler untuk menutup dialog
  const handleClose = () => {
    setOpen(false);
    onClose(); // Memanggil fungsi onClose dari properti
  };

  return (
    <>
      <Button placeholder="" onClick={handleOpen}>
        Sign In
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen} // Menggunakan onClose untuk menutup dialog
        className="bg-transparent shadow-none"
        placeholder=""
      >
        <Card className="mx-auto w-full max-w-[24rem]" placeholder="">
          <CardBody className="flex flex-col gap-4" placeholder="">
            <Typography variant="h4" color="blue-gray" placeholder="">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
              placeholder=""
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6" placeholder="">
              Your Email
            </Typography>
            <Input label="Email" size="lg" crossOrigin="" />
            <Typography className="-mb-2" variant="h6" placeholder="">
              Your Password
            </Typography>
            <Input label="Password" size="lg" crossOrigin="" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" crossOrigin="" />
            </div>
          </CardBody>
          <CardFooter className="pt-0" placeholder="">
            <Button
              variant="gradient"
              onClick={handleClose} // Menggunakan handleClose untuk menutup dialog
              fullWidth
              placeholder=""
            >
              Sign In
            </Button>
            <Typography
              variant="small"
              className="mt-4 flex justify-center"
              placeholder=""
            >
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                placeholder=""
                onClick={handleClose} // Menutup dialog saat mengeklik "Sign up"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default Auth;
