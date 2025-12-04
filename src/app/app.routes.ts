import { Routes } from '@angular/router';
import { HomePage } from '../components/pages/home-page/home-page';
import { RegisterUser } from '../components/pages/auth-pages/register-user/register-user';
import { LoginUser } from '../components/pages/auth-pages/login-user/login-user';
import { Tags } from '../components/pages/auth-pages/tag-pages/tags-list/tags';
import { TagCreate } from '../components/pages/auth-pages/tag-pages/tag-create/tag-create/tag-create';
import { TagUpdate } from '../components/pages/auth-pages/tag-pages/tag-update/tag-update';
import { AdminSessions } from '../components/pages/admin-pages/admin-sessions/admin-sessions/admin-sessions';
import { AdminUsers } from '../components/pages/admin-pages/admin-users/admin-user/admin-user';
import { AdminDecks } from '../components/pages/admin-pages/admin-decks/admin-decks/admin-decks';

export const routes: Routes = [
    // Homepage by default
    {path:'', component: HomePage},
    // User route 
    {path : 'register' , component : RegisterUser},
    {path : 'login' , component : LoginUser},
    // Tags route
    {path : 'tags', component : Tags},
    {path : 'tags/create', component : TagCreate},
    {path : 'tags/update/:id', component : TagUpdate},
    // Deck route 
    // Card route

    // Session route

    // Admin route
    {path :'admin/users', component : AdminUsers},
    {path :'admin/decks', component : AdminDecks},
    {path :'admin/sessions', component : AdminSessions},
];
