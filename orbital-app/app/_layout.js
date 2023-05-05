import { Provider as PaperProvider } from 'react-native-paper';
import { Slot } from 'expo-router';
export default function Root() {
    return (
        <PaperProvider>
            <Slot />
        </PaperProvider>
    )
}