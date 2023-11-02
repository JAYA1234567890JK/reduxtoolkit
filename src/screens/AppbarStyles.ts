import { SxProps } from "@mui/material";

const AppbarStyles: any = (theme: any) =>
  ({
    cardContainer: {
      maxWidth: 380,
      minHeight:470,
      padding: "1.2rem !important",
      boxShadow: "2px 5px 8px black !important",
      marginTop: "100px !important",
      marginBottom: "20px !important",
      "&:hover": {
        transform: "scale(1.1)",
        // transform: "translateX(20px)"
      },
    },
    boxContainer: {
      display: "flex !important",
      alignItems: "center !important",
    },
    avtar: {
      backgroundColor: "red !important",
      marginRight: ".5rem !important",
    },
    title: {
      color: "#000000 !important",
      marginRight: ".5rem !important",
      display: "-webkit-box !important",
      overflow: "hidden !important",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 2,
      flexGrow: 1,
    },
    price: {
      color: "#737373 !important",
    },
    productImage: {
      width: "100% !important",
    },
    productsConatiner:{
      width: "100% !important",
      height: 250 , 
      display: "flex !important",
      justifyContent: "center !important",
      marginTop: "0.5rem !important",
      marginBottom: "0.5rem !important",
    },

    description: {
      color: "#737373",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
    },
    boxGridContainer: {
      marginTop: "30px !important",
    },
    gridContainer: {
      padding: "20px !important",
      [theme.breakpoints.up("xs")]: {
        marginTop: "50px !important",
      },
    },

    appContainer: {
      display: "flex !important",
      justifyContent: "space-around",
    },
    emailText: {
      fontSize: "20px !important",
      fontFamily: "system-ui !important",
    },
    cartButtons: {
      borderRadius: "10px !important",
      color: "#fff !important",
      backgroundColor: "hsla(11, 100%, 50%, 0.65) !important",
    },
    cartItembuttons: {
      borderRadius: "10px !important",
      color: "#fff !important",
      backgroundColor: "hsla(11, 100%, 50%, 0.65) !important",
    },
    shopTitle: {
      fontSize: "20px !important",
      color: "#fff !important",
    },
    circularContainer: {
      marginTop: "400px !important",
      textAlign: "center",
      fontFamily: "system-ui !important",
      // textAlign: 'center',
      padding: '2rem',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a background color
      borderRadius: '50%', // Make it a circle
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Add a shadow
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  } satisfies Record<string, SxProps>);

export default AppbarStyles;
