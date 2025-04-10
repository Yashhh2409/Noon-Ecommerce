"use client";

import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Stack } from "@mui/system";
import {
  Checkbox,
  Container,
  Switch,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import GoogleMapComp from "@/components/GoogleMapComp";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const countries = [
  { name: "UAE", flag: "/flags/ae.svg" },
  { name: "KSA", flag: "/flags/sa.svg" },
  { name: "Egypt", flag: "/flags/eg.svg" },
];

const Checkout = () => {
  const [open, setOpen] = useState(true);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Backdrop
        className="z-50"
        sx={(theme) => ({ color: "#fff" })}
        open={open}
      >
        {/* <CircularProgress color="inherit" /> */}
        <Modal
          className="z-50"
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Container
            maxWidth="md"
            className="z-50 h-auto bg-[#FFFFFF]"
            sx={style}
          >
            <Box className="flex justify-evenly mb-3">
              <Typography
                id="modal-modal-title"
                variant="p"
                className="text-secondary font-bold text-xl"
              >
                Add New Address
              </Typography>
              <Box className="flex items-center justify-center gap-2">
                <Image
                  src="/icons-svg/noon-logo-checkout.svg"
                  alt="img"
                  width={40}
                  height={40}
                />
                <Typography variant="p" className="text-secondary font-bold">
                  Show me noon lockers and collection points
                </Typography>
                <Switch defaultChecked />
              </Box>
              <Box className="flex items-center gap-2">
                <Image
                  src={"/flags/ae.svg"}
                  width={35}
                  height={35}
                  alt="img"
                  className="w-50 h-30"
                />
                <Typography
                  variant="p"
                  className="text-secondary text-sm text-nowrap font-bold"
                >
                  Ship to
                </Typography>
                <Box>
                  <select>
                    <option value="">
                      <div>
                        <Image
                          src={"/flags/ae.svg"}
                          width={35}
                          height={35}
                          alt="img"
                          className="w-50 h-30"
                        />
                        <Typography variant="p" className="text-primary">
                          UAE
                        </Typography>
                        <Checkbox />
                      </div>
                    </option>
                  </select>
                </Box>
              </Box>
            </Box>
            <Box>
              <div className="relative">
                <GoogleMapComp />
              </div>
              <div className="absolute top-24 w-[85%] p-1 mx-5">
                <input type="text" placeholder="Search location" className="py-1 pl-4 w-full rounded-md outline-none"/>
              </div>
            </Box>
          </Container>
        </Modal>
      </Backdrop>
    </>
  );
};

export default Checkout;
