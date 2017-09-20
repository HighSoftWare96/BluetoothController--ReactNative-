/* Non potendo utilizzare con il drawerNavigator i params e quindi impostare un determinato titolo ad ogni
route, l'unico dato utile che mi viene passato da this.props.navigation.state è appunto il RouteName che contiene il nome della 
classe/componente attualmente switchato, di consegueza la funzione evaluateActionBarTitle ha l'obbiettivo di rendere più
user-friendly i nomi delle classi da poi visualizzare nella toolbar android (vedi common.component -- il titolo viene passato tramite props) */
export const evaluateActionBarTitle = function (routeName) {
    switch (routeName) {
        case 'AppHome':
            return 'Bluetooth Controller';
        case 'KybrdMode':
            return 'Keyboard Mode';
        case 'OneBtnMode':
            return 'One button mode';
        case 'PadMode':
            return 'Pad mode';
        default:
            return routeName;
    }
}