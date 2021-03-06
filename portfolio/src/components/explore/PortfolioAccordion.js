import React, { useContext } from "react";
import { UserContext } from "../../helpers/UserContext";
import { Accordion } from "@mui/material";
import { AccordionSummary } from "@mui/material";
import { AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PortfolioExplore from "./PortfolioExplore";
import PortfolioDetail from "./PortfolioDetail";

const PortfolioAccordion = (props) => {
  const userContext = useContext(UserContext);

  return (
    <Accordion className="block">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        {/* <PortfolioExplore token={props.token} /> */}
        <h2>
          {props.token.name} <span className="light">{props.token.symbol}</span>
        </h2>
      </AccordionSummary>
      <AccordionDetails>
        {userContext.address ? (
          <PortfolioDetail token={props.token} />
        ) : (
          <p>Please connect to Metamask</p>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default PortfolioAccordion;
