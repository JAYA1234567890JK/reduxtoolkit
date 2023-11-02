import { SxProps } from "@mui/material";

const Estyles: any = (theme: any) =>
  ({
    navContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",

      [theme.breakpoints.up("md")]: {
        display: "flex !important",
        flexWrap: "wrap !important",
        justifyContent: "center !important",
        width: "100% !important",
      },
      [theme.breakpoints.up("sm")]: {
        display: "flex !important",
        flexWrap: "wrap !important",
        justifyContent: "center !important",
        width: "85% !important",
      },
      [theme.breakpoints.up("xs")]: {
        display: "flex !important",
        flexWrap: "wrap !important",
        justifyContent: "center !important",
        width: "100%",
      },
      [theme.breakpoints.up("lg")]: {
        width: "100% !important",
        display: "flex !important",
        justifyContent: "space-between !important",
      },
      [theme.breakpoints.up("xl")]: {
        width: "100% !important",
        display: "flex !important",
        justifyContent: "space-between !important",
      },
    },
    navItemsConatiner: {
      display: "flex",
      alignItems: "center",
      paddingLeft: "5%",
    },
    navItems2Conatiner: {
      display: "flex",
      alignItems: "center",
      paddingRight: "5%",
    },
    itemNames: {
      fontFamily: "Montserrat Alternates !important",
      fontWeight: "600 !important",
      fontSize: "20px !important",
      padding: "10px",
      cursor: "pointer",
      [theme.breakpoints.only("xs")]: {
        fontSize: "15px !important",
      },
    },
    itemButton: {
      fontFamily: "Montserrat Alternates !important",
      fontWeight: "600 !important",
      fontSize: "18px !important",
      padding: "10px",
      color: "#fff !important",
      [theme.breakpoints.only("xs")]: {
        fontSize: "14px !important",
      },
    },
    borderLine: {
      fontSize: "25px !important",
      color: "hsla(63, 11%, 81%, 0.44) !important",
    },
    appBarContainer: {
      backgroundColor: "hsla(11, 100%, 50%, 0.65) !important",
    },
    borderBottomLine: {
      color: "#fff !important",
      width: "86% !important",
      border: "0.5px solid hsla(63, 11%, 81%, 0.44) !important",
    },
    shopingBag: {
      width: "25px !important",
      height: "25px !important",
      color: "#fff !important",
    },
    dashbord: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    outlineInput: {
      width: "74rem",
      height: "45px",
      background: "#fff !important",
      "& fieldset": { border: "none" },
      [theme.breakpoints.only("xl")]: {
        width: "74rem !important",
      },
      [theme.breakpoints.only("lg")]: {
        width: "53rem !important",
      },
      [theme.breakpoints.only("md")]: {
        width: "40rem !important",
      },
      [theme.breakpoints.only("sm")]: {
        width: "30rem !important",
      },
      [theme.breakpoints.only("xs")]: {
        width: "10rem !important",
      },
    },
    inputProps: {
      width: "70% !important",
    },
    iconHeight: {
      display: "flex",
      alignItems: "center",
    },
    searchIcon: {
      marginLeft: "300px !important",
    },
    searchBackgroundColr: {
      backgroundColor: "hsla(11, 100%, 50%, 0.65) !important",
      padding: "5px",
      color: "#fff !important",
    },
    sucessContainer: {
      display: "block !important",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "#28a745",
      color: "#fff",
      padding: "20px",
      borderRadius: "50px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      opacity: "0",
      animation:
        "$fadeIn 0.5s ease-in-out forwards, $bounce 0.5s ease-in-out 0.5s both",
    },
    "@keyframes fadeIn": {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },
    "@keyframes bounce": {
      "0%, 20%, 50%, 80%, 100%": {
        transform: "translateY(0)",
      },
      "40%": {
        transform: "translateY(-20px)",
      },
      "60%": {
        transform: "translateY(-10px)",
      },
    },
  } satisfies Record<string, SxProps>);

export default Estyles;
