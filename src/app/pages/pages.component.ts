import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function custonInitFunctions(): void;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: [

  ]
})
export class PagesComponent implements OnInit {


  public linkTheme = document.querySelector('#theme');

  constructor(private settingsService: SettingsService ){}

  ngOnInit(): void {

    custonInitFunctions();

  }




}


