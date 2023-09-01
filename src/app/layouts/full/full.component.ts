import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, AfterViewInit } from '@angular/core';
import jwtDecode from 'jwt-decode';


/** @title Responsive sidenav */
@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: []
})
export class FullComponent implements OnDestroy, AfterViewInit {
  mobileQuery: MediaQueryList;
  tokenpayload:any = ""
  dashboardName:any="Cafe Management System"
  token:any = localStorage.getItem('token')
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.tokenpayload = jwtDecode(this.token)
    if(this.tokenpayload.Role=="ADMIN")
    {
      this.dashboardName="Admin Dashboard"
    }
    else if (this.tokenpayload.Role=="USER"){
      this.dashboardName="CMS Client"
    }

    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() { }
}
