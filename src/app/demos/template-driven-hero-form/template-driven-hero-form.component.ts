import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Hero } from "./hero";

@Component({
  selector: 'app-template-driven-hero-form',
  templateUrl: './template-driven-hero-form.component.html',
  styleUrls: ['./template-driven-hero-form.component.scss']
})
export class TemplateDrivenHeroFormComponent implements OnInit {

  public powers: string[] = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer'
  ];
  public model: Hero = new Hero(18, 'Elastigirl', this.powers[1], 'Mrs. Incredible');
  public submitted: boolean = false;

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  @ViewChild('heroForm') public form: NgForm | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public newHero(): void {
    this.model = new Hero(11, '');
  }

  public onSubmit(): void {
    this.submitted = true;
  }

}
