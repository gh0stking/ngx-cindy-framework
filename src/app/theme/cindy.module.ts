import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  AutoCompleteModule,
  CalendarModule,
  CheckboxModule,
  ChipsModule,
  ColorPickerModule,
  DropdownModule,
  EditorModule,
  InputSwitchModule,
  InputTextModule,
  InputTextareaModule,
  ListboxModule,
  InputMaskModule,
  MultiSelectModule,
  PasswordModule,
  RadioButtonModule,
  RatingModule,
  SliderModule,
  SpinnerModule,
  SelectButtonModule,
  ToggleButtonModule,
  TriStateCheckboxModule,
  ButtonModule,
  SplitButtonModule,
  CarouselModule,
  DataGridModule,
  DataListModule,
  DataScrollerModule,
  DataTableModule,
  SharedModule,
  OrganizationChartModule,
  TreeModule,
  OrderListModule,
  GMapModule,
  PaginatorModule,
  PickListModule,
  ScheduleModule,
  TreeTableModule,
  AccordionModule,
  FieldsetModule,
  PanelModule,
  TabViewModule,
  ToolbarModule,
  ConfirmDialogModule,
  DialogModule,
  LightboxModule,
  OverlayPanelModule,
  TooltipModule,
  FileUploadModule,
  MenuModule,
  BreadcrumbModule,
  ContextMenuModule,
  MegaMenuModule,
  MenubarModule,
  PanelMenuModule,
  SlideMenuModule,
  StepsModule,
  TabMenuModule,
  TieredMenuModule,
  ChartModule,
  MessagesModule,
  GrowlModule,
  GalleriaModule,
  DragDropModule,
  DeferModule,
  BlockUIModule,
  CaptchaModule,
  InplaceModule,
  ProgressBarModule,
  CodeHighlighterModule,
  TerminalModule,
} from 'primeng/primeng';

import {
  ConfirmationService,
} from 'primeng/primeng';

import { MessageService } from 'primeng/components/common/messageservice';

import {
  CindyButton,
  CindySplitButton,
  CindyChart,
  CindyCarousel,
  CindyDataGrid,
  CindyDataList,
  CindyDataScroller,
  CindyGMap,
  CindyOrderList,
  CindyOrgChart,
  CindyPaginator,
  CindyPickList,
  CindySchedule,
  CindyTree,
  CindyTreeTable,
  CindyDragDrop,
  CindyUpload,
  CindyAutoComplete,
  CindyCalendar,
  CindyCheckbox,
  CindyChips,
  CindyColorPicker,
  CindyDropdown,
  CindyEditor,
  CindyInputGroup,
  CindyInputSwitch,
  CindyInputText,
  CindyInputTextArea,
  CindyListBox,
  CindyMask,
  CindyMultiSelect,
  CindyPassword,
  CindyRadioButton,
  CindyRating,
  CindySlider,
  CindySpinner,
  CindyToggleButton,
  CindyTriCheckbox,
  CindyBreadcrumb,
  CindyContextMenu,
  CindyMegaMenu,
  CindyMenu,
  CindyMenubar,
  CindyPanelMenu,
  CindySlideMenu,
  CindySteps,
  CindyTabMenu,
  CindyTieredMenu,
  CindyGrowl,
  CindyMessages,
  CindyBlockUI,
  CindyCaptcha,
  CindyCodeHighlighter,
  CindyDefer,
  CindyInplace,
  CindyProgressBar,
  CindyResponsive,
  CindyRTL,
  CindyTerminal,
  CindyValidation,
  CindyGalleria,
  CindyConfirmDialog,
  CindyDialog,
  CindyLightbox,
  CindyOverlayPanel,
  CindyPageTop,
  CindyAccordion,
  CindyFieldset,
  CindyGrid,
  CindyPanel,
  CindyTabView,
  CindyToolbar,
  CindyHeader,
  CindyFooter,
  CindyContent,
} from './components';

import {
  CindyTooltip,
} from './directives';

import {
  CindyEmailValidator,
  CindyEqualPasswordsValidator,
} from './validators';

import {
  CindyConfirmationService,
  CindyMessagesService,
} from './services';


const CINDY_COMPONENTS = [
  CindyButton,
  CindySplitButton,
  CindyChart,
  CindyCarousel,
  CindyDataGrid,
  CindyDataList,
  CindyDataScroller,
  CindyGMap,
  CindyOrderList,
  CindyOrgChart,
  CindyPaginator,
  CindyPickList,
  CindySchedule,
  CindyTree,
  CindyTreeTable,
  CindyDragDrop,
  CindyUpload,
  CindyAutoComplete,
  CindyCalendar,
  CindyCheckbox,
  CindyChips,
  CindyColorPicker,
  CindyDropdown,
  CindyEditor,
  CindyInputGroup,
  CindyInputSwitch,
  CindyInputText,
  CindyInputTextArea,
  CindyListBox,
  CindyMask,
  CindyMultiSelect,
  CindyPassword,
  CindyRadioButton,
  CindyRating,
  CindySlider,
  CindySpinner,
  CindyToggleButton,
  CindyTriCheckbox,
  CindyBreadcrumb,
  CindyContextMenu,
  CindyMegaMenu,
  CindyMenu,
  CindyMenubar,
  CindyPanelMenu,
  CindySlideMenu,
  CindySteps,
  CindyTabMenu,
  CindyTieredMenu,
  CindyGrowl,
  CindyMessages,
  CindyBlockUI,
  CindyCaptcha,
  CindyCodeHighlighter,
  CindyDefer,
  CindyInplace,
  CindyProgressBar,
  CindyResponsive,
  CindyRTL,
  CindyTerminal,
  CindyValidation,
  CindyGalleria,
  CindyConfirmDialog,
  CindyDialog,
  CindyLightbox,
  CindyOverlayPanel,
  CindyPageTop,
  CindyAccordion,
  CindyFieldset,
  CindyGrid,
  CindyPanel,
  CindyTabView,
  CindyToolbar,
  CindyHeader,
  CindyFooter,
  CindyContent,
];

const CINDY_DIRECTIVES = [
  CindyTooltip,
];

const CINDY_VALIDATORS = [
  CindyEmailValidator,
  CindyEqualPasswordsValidator,
];

const CINDY_SERVICES = [
  CindyConfirmationService,
  CindyMessagesService,
];

const PRIMENG_MODULES = [
  ButtonModule,
  RouterModule,
  FormsModule,
  AutoCompleteModule,
  CalendarModule,
  CheckboxModule,
  ChipsModule,
  ColorPickerModule,
  DropdownModule,
  EditorModule,
  InputSwitchModule,
  InputTextModule,
  InputTextareaModule,
  ListboxModule,
  InputMaskModule,
  MultiSelectModule,
  PasswordModule,
  RadioButtonModule,
  RatingModule,
  SliderModule,
  SpinnerModule,
  SelectButtonModule,
  ToggleButtonModule,
  TriStateCheckboxModule,
  ButtonModule,
  SplitButtonModule,
  CarouselModule,
  DataGridModule,
  DataListModule,
  DataScrollerModule,
  DataTableModule,
  SharedModule,
  OrganizationChartModule,
  TreeModule,
  OrderListModule,
  GMapModule,
  PaginatorModule,
  PickListModule,
  ScheduleModule,
  TreeTableModule,
  AccordionModule,
  FieldsetModule,
  PanelModule,
  TabViewModule,
  ToolbarModule,
  ConfirmDialogModule,
  DialogModule,
  LightboxModule,
  OverlayPanelModule,
  TooltipModule,
  FileUploadModule,
  MenuModule,
  BreadcrumbModule,
  ContextMenuModule,
  MegaMenuModule,
  MenubarModule,
  PanelMenuModule,
  SlideMenuModule,
  StepsModule,
  TabMenuModule,
  TieredMenuModule,
  ChartModule,
  MessagesModule,
  GrowlModule,
  GalleriaModule,
  DragDropModule,
  DeferModule,
  BlockUIModule,
  CaptchaModule,
  InplaceModule,
  ProgressBarModule,
  CodeHighlighterModule,
  TerminalModule,
];

const PRIMENG_SERVICES = [
  ConfirmationService,
  MessageService
];


@NgModule({
  declarations: [
    ...CINDY_DIRECTIVES,
    ...CINDY_COMPONENTS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PRIMENG_MODULES,
  ],
  exports: [
    RouterModule,
    ...CINDY_DIRECTIVES,
    ...CINDY_COMPONENTS,
  ]
})
export class CindyModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CindyModule,
      providers: [
        ...CINDY_VALIDATORS,
        ...PRIMENG_SERVICES,
        ...CINDY_SERVICES,
      ]
    };
  }
}