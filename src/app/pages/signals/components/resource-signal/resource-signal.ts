import { ChangeDetectionStrategy, Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-signal',
  templateUrl: './resource-signal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceSignal {
  readonly usersResource = resource({
    params: () => ({ id: 1 }),
    loader: ({ params }) => this.fetchUsers(params.id),
  });

  protected reload(): void {
    this.usersResource.reload();
  }

  private fetchUsers(id: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10);

      console.log('Random number:', randomNumber);

      setTimeout(() => {
        randomNumber > 3 ? resolve('Data resolved') : reject('Data rejected');
      }, 1000);
    });
  }
}
