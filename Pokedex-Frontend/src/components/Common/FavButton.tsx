import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";

interface FavProps {
   className: string,
   pId: number,
   pName: string,
}

class FavButton extends React.Component<FavProps> {
   constructor(props: FavProps) {
      super(props);
   }

   checkProps = (props: FavProps) => {
      if (props.pId !== 0 && props.pName !== "") {
         return true;
      }
      return false;
   };

   render() {
      if (this.checkProps(this.props)) {
         return (
            <button style={{border:0,font:"inherit",backgroundColor:"transparent"}}>
             <StarBorderIcon/>
            </button>
         );
      }
   };
}

export default FavButton;
