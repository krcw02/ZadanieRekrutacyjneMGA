import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})

export class NavbarComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.toggleNavbar();
    }, 2000);
  }

  toggleNavbar(): void {
    
    const navbar = document.getElementById('navbarMenu');
    if (navbar) {
      new bootstrap.Collapse(navbar, { toggle: false }).hide();
      console.log('navbar closed', navbar);
    }

  }
  
  
}
