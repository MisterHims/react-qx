import { Box, Typography } from '@mui/material'
import { List, ListItem, ListItemText } from '@mui/material';

const MyReactStructure = () => {
  return (
    <Box component="main" className="content">
        <Typography variant='h1'>Structure générale</Typography>
        <Typography variant='h2'>Structure des Composants</Typography>
        <Typography variant='body1' component='div'>
            Mon application React utilise une structure permettant de classer efficacement différents types de composants&nbsp;:
            Inputs
            Text Input
            Select
            Checkbox
            Radio Button
            Datepicker
            Timepicker
            Slider
            File Upload
            Data Display
            Typography
            Table
            Card
            List
            Carousel
            Calendar
            Tooltip
            Popover
            Accordion
            Tabs
            Modal/Dialog
            Stepper/Wizard
            Feedback
            Alert/Notification
            Snackbar
            Progress Bar
            Skeleton Loader
            Toast
            Confirmation Dialog
            Error Boundary
            Surfaces
            App Bar
            Navigation Drawer
            Toolbar
            Tabs
            Breadcrumbs
            Navigation
            Menu
            Pagination
            Search
            Sidebar
            Layout
            Grid
            Flexbox
            Box
            Spacer
            Utils
            Theme Provider
            Styling Functions
            Icons
            Button
            IconButton
            Badge
            Chip
            Avatar
            Stepper/Wizard
            On pourrait également imaginer d'autres sous-catégories pour chaque catégorie si nécessaire. Par exemple, dans la catégorie "Data Display", on pourrait ajouter une sous-catégorie pour les graphiques, ou dans la catégorie "Navigation", une sous-catégorie pour les liens de navigation. La liste de catégories et sous-catégories peut varier en fonction des besoins et des choix de l'équipe de développement.
        </Typography>
        <List>
            <ListItem sx={{ display: 'list-item' }}>
                <ListItemText
                    primary="Inputs"
                    secondary="Text Input"
                />
            </ListItem>
            <ListItem>
                <ListItemText primary="Item 2" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Item 3" />
            </ListItem>
        </List>
    </Box>
  )
}

export default MyReactStructure