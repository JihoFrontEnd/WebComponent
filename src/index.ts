import { useNavigationBar } from './NavigationBar';

useNavigationBar();

const navigation = document.getElementById('navigation') as HTMLElement;
navigation.innerHTML = '<navigation-bar />';
