import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  outline: "none",
  p: 2,
};

const tasks = [1, 1, 1, 1];
export default function UserList({ handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {tasks.map((item, index) => (
            <>
              {" "}
              <div className="flex items-center justify-between w-full">
                <div>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src="https://raw.githubusercontent.com/Innocentsax/DEV-PRO-MG/main/dev-pro-mg-frontend/src/component/Sidebar/logo.png" />
                    </ListItemAvatar>
                    <ListItemText
                      primary={"InnocentUdo"}
                      secondary="@DEV-PRO-MG"
                    />
                  </ListItem>
                </div>
                <Button className="customeButton">select</Button>
              </div>
              {index !== tasks.length - 1 && <Divider variant="inset" />}
            </>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
