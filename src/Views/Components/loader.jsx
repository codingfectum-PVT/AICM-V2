import { Backdrop, CircularProgress } from "@mui/material";

const FullScreenLoader = ({ open }) => (   <Backdrop     open={open}     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}   >     <CircularProgress />   </Backdrop> );

export default FullScreenLoader