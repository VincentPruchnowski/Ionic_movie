import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../student.service';
import { ActionSheetController } from '@ionic/angular';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {
  public students: Student[];

  constructor(
    private studentService: StudentService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router) { }


  ngOnInit() {
    this.students = this.studentService.getAll();
  }


  /**
 * Méthode d'ouverture de la popup d'actions sur un étudiant.
 * @param student
 */
  async presentActionSheet(student: Student) {
    const actionSheet = await this.actionSheetController.create({
      header: student.firstName + ' ' + student.lastName,
      buttons: [
        {
          text: 'Marquer Présent',
          icon: 'eye',
          handler: () => {
            student.status = 'present';
          },
        },
        {
          text: 'Marquer Absent',
          icon: 'eye-off-outline',
          handler: () => {
            student.status = 'absent';
          },
        },
        {
          text: 'Supprimer',
          icon: 'trash',
          role: 'destructive',
          handler: () => this.presentDeleteAlert(student),
        },

        {
          text: 'Annuler',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel...');
          },
        },
      ],
    });
    await actionSheet.present();
  }


  /**
  * Méthode d'affichage de la suppression de l'étudiant.
  * @param student
  */
  private async presentDeleteAlert(student: Student) {
    const alert = await this.alertController.create({
      header: 'Supprimer cet étudiant ?',
      subHeader: `${student.firstName} ${student.lastName}`,
      message: 'Cette opération ne pourra être annulée.',
      buttons: [
        {
          text: 'Supprimer',
          handler: () => this.deleteStudent(student),
        },
        {
          text: 'Finalement non...',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }


  /**
   * Méthode de suppression de l'étudiant..
   * @param student
   */
  async deleteStudent(student: Student) {
    this.students = this.students.filter(
      (studentDuTableau) => studentDuTableau.id !== student.id
    );
    const toast = await this.toastController.create({
      message: `${student.firstName} ${student.lastName} a été supprimé.`,
      position: 'top',
      duration: 3000,
    });
    await toast.present();
  }
  showInfo(student: Student) {
    this.studentService.setCurrent(student);
    this.router.navigateByUrl('student.info');
  }
}
