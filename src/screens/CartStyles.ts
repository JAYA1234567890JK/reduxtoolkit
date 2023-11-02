import { SxProps } from "@mui/material";

const CartStyles: any = (theme: any) =>
  ({
    cartButtons: {
      marginTop: "30px !important",
      borderRadius: "10px !important",
      margin: "10px !important",
      color: "#fff !important",
      background:
        "linear-gradient(45deg, hsla(94, 5%, 66%, 1) 30%, hsla(211, 33%, 27%, 1) 90%) !important",
    },
    title: {
      color: "#000000 !important",
      marginRight: ".5rem !important",
      display: "-webkit-box !important",
      overflow: "hidden !important",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      marginLeft: "50px !important", 
      fontSize: "18px !important"
    },
    noCarts: {
      fontFamily: "Montserrat Alternates !important",
      fontWeight: "600 !important",
      fontSize: "20px !important",
      padding: "10px",
    },
    cartbgContainer:{
      display: "flex !important",
      justifyContent: "center",
      flexDirection: "column",
      Width: "13rem",
    },
    cartItembuttons: {
      borderRadius: "10px !important",
      color: "#fff !important",
      backgroundColor: "hsla(11, 100%, 50%, 0.65) !important",
      margin:'5px !important'
    },
    cartNameFlex:{
      display: "flex",
      alignItems: "center",
    },
    cartImage:{
      width: "80px"
    },
    scrollBar:{
      padding: "20px",
      overflowY: "scroll",
      maxHeight: "50vh",
      "&::-webkit-scrollbar": {
        width: "12px",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "hsla(11, 100%, 50%, 0.65)",
        borderRadius: "6px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "hsla(11, 100%, 50%, 0.65)",
      },
      "&::-webkit-scrollbar-track": {
        background: "gary",
      },
    },
    payments:{
      marginLeft: "25px", 
      marginTop: "20px"
    },
    boxBorder: {
      margin:'10px !important'
    //  height:'150px !important'
    // marginTop:'150px !important'
    },
  } satisfies Record<string, SxProps>);

export default CartStyles;
