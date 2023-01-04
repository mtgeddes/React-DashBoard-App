import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails expandIcon={<ExpandMoreIcon />}>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iusto porro praesentium? Alias cupiditate sit iure voluptas, a possimus fugiat ipsa nesciunt veniam impedit at laboriosam minima molestias culpa illum?
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Question
        </Typography>
      </AccordionSummary>
      <AccordionDetails expandIcon={<ExpandMoreIcon />}>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iusto porro praesentium? Alias cupiditate sit iure voluptas, a possimus fugiat ipsa nesciunt veniam impedit at laboriosam minima molestias culpa illum?
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important
        </Typography>
      </AccordionSummary>
      <AccordionDetails expandIcon={<ExpandMoreIcon />}>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iusto porro praesentium? Alias cupiditate sit iure voluptas, a possimus fugiat ipsa nesciunt veniam impedit at laboriosam minima molestias culpa illum?
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An 
        </Typography>
      </AccordionSummary>
      <AccordionDetails expandIcon={<ExpandMoreIcon />}>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iusto porro praesentium? Alias cupiditate sit iure voluptas, a possimus fugiat ipsa nesciunt veniam impedit at laboriosam minima molestias culpa illum?
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
         mporta
        </Typography>
      </AccordionSummary>
      <AccordionDetails expandIcon={<ExpandMoreIcon />}>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iusto porro praesentium? Alias cupiditate sit iure voluptas, a possimus fugiat ipsa nesciunt veniam impedit at laboriosam minima molestias culpa illum?
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
         tion
        </Typography>
      </AccordionSummary>
      <AccordionDetails expandIcon={<ExpandMoreIcon />}>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iusto porro praesentium? Alias cupiditate sit iure voluptas, a possimus fugiat ipsa nesciunt veniam impedit at laboriosam minima molestias culpa illum?
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An4
        </Typography>
      </AccordionSummary>
      <AccordionDetails expandIcon={<ExpandMoreIcon />}>
        <Typography>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iusto porro praesentium? Alias cupiditate sit iure voluptas, a possimus fugiat ipsa nesciunt veniam impedit at laboriosam minima molestias culpa illum?
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
}

export default FAQ;