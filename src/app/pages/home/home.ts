import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ITab {
  label: string;
  link: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  readonly tabs: ITab[] = [
    {
      label: 'Signals',
      link: '/signals',
    },
    {
      label: 'Components',
      link: '/components',
    },
    {
      label: 'Templates',
      link: '/templates',
    },
    {
      label: 'Directives',
      link: '/directives',
    },
    {
      label: 'Dependency Injection',
      link: '/di',
    },
  ];
}
