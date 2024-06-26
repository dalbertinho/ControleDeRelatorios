import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReportService } from '../../services/report/report.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  private id: any;
  private sub: any;
  public notas_atividade;
  pageTitle = "Relatório de Correção";

  constructor(private _reportService: ReportService, private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Relatório de Correção - Programação Funcional UFCG');
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.getReport();
    });
  }

  getReport() {/*
    this._reportService.getReport(this.id).subscribe(
      data => { this.notas_atividade = data},
      err => console.error(err),
      () => console.log('Done loading report da atividade ')
    );
    */
    this.notas_atividade = [
    {"nome":"ALBERTO MEDEIROS GOMES DE FIGUEIREDO","aindex":"","matricula":"117210300","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"ANDERSON DALBERT CARVALHO VITAL","aindex":"","matricula":"115210091","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"CAIO FABIO JUVINO DE QUEIROZ","aindex":"","matricula":"116111545","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"DEUZIMAR SEPULVEDA DE VASCONCELOS","aindex":"","matricula":"111110071","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"DIMITRE ANDREW AIRES DE OLIVEIRA","aindex":"","matricula":"113111794","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"EMANUEL JOSE GUIMARAES BRITO","aindex":"","matricula":"115111115","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"FABIANO ANDRE LAUREANO","aindex":"","matricula":"115211160","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"GABRIEL DE ARAUJO COUTINHO","aindex":"","matricula":"114210789","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"GUSTAVO HENRIQUE QUEIROZ DE OLIVEIRA","aindex":"","matricula":"112110936","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"GUSTAVO MONTEIRO ALVES","aindex":"","matricula":"113110035","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"IGOR BRASILEIRO DUARTE","aindex":"","matricula":"114210792","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"IONESIO LIMA DA COSTA JUNIOR","aindex":"","matricula":"115110120","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"JAAZIEL LEVI SANTOS MOURA","aindex":"","matricula":"114110451","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"JEFERSON ROLIM HOLANDA","aindex":"","matricula":"113112114","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"LEO MEIRA VITAL","aindex":"","matricula":"113110054","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"LUCAS FRANCA DO NASCIMENTO FARIAS","aindex":"","matricula":"112210096","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"MATEUS GOMES DE MORAIS","aindex":"","matricula":"116110762","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"MATEUS SILVA LUNA","aindex":"","matricula":"113210626","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"RAFAEL BRUNO ALBUQUERQUE DE SOUSA","aindex":"","matricula":"114111621","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"RAFAEL KLYNGER DA SILVA DANTAS","aindex":"","matricula":"114111372","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"RENATO ELY DOMINGUES SILVA","aindex":"","matricula":"113210148","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"RICARDO MAGNO DO NASCIMENTO FERREIRA","aindex":"","matricula":"113112300","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"TARCITO LUA PEREIRA MARQUES FERNANDES","aindex":"","matricula":"114210818","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"THARYCK SOUTO VASCONCELOS","aindex":"","matricula":"116110901","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"VINICIUS ALENCAR AGOSTINI","aindex":"","matricula":"115110107","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"},
    {"nome":"WAGNER MAGNO RAMOS SALES","aindex":"","matricula":"115110570","dataEnvio":"31/02/2018","passou":"20","erros":"0","falhas":"0","pulados":"2","tempo":"0.2","notaTestes":"3.6","notaDesign":"5.9","nota":"9.5"}
  ];


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
