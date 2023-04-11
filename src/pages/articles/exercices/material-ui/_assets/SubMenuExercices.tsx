import * as React from "react";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { styled } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import MenuList from "@mui/joy/MenuList";
import MenuItem from "@mui/joy/MenuItem";
import { NavLink } from "react-router-dom";

const Popup = styled(PopperUnstyled)({
  zIndex: 1000,
});

export default function MenuListCompositionExercices(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Tab") {
      setAnchorEl(null);
    } else if (event.key === "Escape") {
      anchorEl?.focus();
      setAnchorEl(null);
    }
  };

  return (
    <div>
      <Button
        id="subMenuExercices-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
        sx={{ borderRadius: 0 }}
      >
        Exercices
      </Button>
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={anchorEl}
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 4],
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{ boxShadow: "md", bgcolor: "background.body" }}
          >
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to={"exercices/exercice-01"}
            >
              Exercice 1
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to={"exercices/exercice-02"}
            >
              Exercice 2
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to={"/exercices/exercice-03"}
            >
              Exercice 3
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to={"/exercices/exercice-04"}
            >
              Exercice 4
            </MenuItem>
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </div>
  );
}