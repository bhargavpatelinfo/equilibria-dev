import { ButtonType, CustomImageType, RichTextType } from "./common";
import {
  CircularProgressBarType,
  EquilibriaSuccessStoriesType,
  ImageTitleDescriptionCtaType,
  LeaderType,
  QuestionAndAnswerType,
  TitleDescriptionImageType,
  TitleDescriptionType,
} from "./global";

export type SectionType =
  | HomeHeroSectionType
  | HeroSectionType
  | LifeChangingResultsSectionType
  | SliderSectionType
  | BestCareSectionType
  | StopManagingSectionType
  | WeCanHelpSectionType
  | BetterHealthSectionType
  | EquilibriaSuccessStoriesSectionType
  | AffordableExpertCareSectionType
  | LeadersSectionType
  | IntegratedCareSectionType
  | SimpleStepsSectionType
  | YourSuccessSectionType
  | FaqSectionType
  | TransformationSectionType
  | SymptomSolutionsSectionType

{
  /*  Home Hero Section */
}

export interface HomeHeroSectionType {
  _type: "homeHeroSection";
  id?: string;
  prefix: string;
  suffix: string;
  description?: RichTextType;
  rotatingSubtitles?: string[];
}

{
  /*  Hero Section */
}

export interface HeroSectionType {
  _type: "heroSection";
  id?: string;
  title?: RichTextType;
  description?: RichTextType;
  image: CustomImageType
  features?: string[];
  buttons: ButtonType[]
}

{
  /*  Life Changing Results Section */
}

export interface LifeChangingResultsSectionType {
  _type: "lifeChangingResultsSection";
  id?: string;
  headLine?: string;
  title?: RichTextType;
  buttons: ButtonType[];
  circularProgressBar: CircularProgressBarType;
}

{
  /*  Slider Section */
}

export interface SliderSectionType {
  _type: "sliderSection";
  id?: string;
  texts: string[];
}

{
  /* Best Care Section */
}

export interface BestCareSectionType {
  _type: "bestCareSection";
  id?: string;
  title: RichTextType;
  imageTitleDescriptionCtas: ImageTitleDescriptionCtaType[];
}

{
  /* Stop Managing Section */
}

export interface StopManagingSectionType {
  _type: "stopManagingSection";
  id?: string;
  title: RichTextType;
  description: RichTextType;
  titleDescriptionImages: TitleDescriptionImageType[];
}

{
  /* Better Health Section */
}

export interface BetterHealthSectionType {
  _type: "betterHealthSection";
  id?: string;
  title: RichTextType;
  titleDescriptionImages: TitleDescriptionImageType[];
}

{
  /* Equilibria Success Stories Section */
}

export interface EquilibriaSuccessStoriesSectionType {
  _type: "equilibriaSuccessStoriesSection";
  id?: string;
  equilibriaSuccessStories: EquilibriaSuccessStoriesType[];
}

{
  /* Affordable Expert Care Section */
}

export interface AffordableExpertCareSectionType {
  _type: "affordableExpertCareSection";
  id?: string;
  title: RichTextType;
  description: RichTextType;
  imageTitleDescriptionCtas: ImageTitleDescriptionCtaType[];
}

{
  /* LeadersSection */
}

export interface LeadersSectionType {
  _type: "leadersSection";
  id?: string;
  title: RichTextType;
  description: RichTextType;
  buttons: ButtonType[];
  leaders: LeaderType[];
}

{
  /* We Can Help Section */
}

export interface WeCanHelpSectionType {
  _type: "weCanHelpSection";
  id?: string;
  backgroundImage: CustomImageType;
  title: RichTextType;
  description: RichTextType;
  button: ButtonType;
}

{
  /* Transformation Section */
}

export interface TransformationSectionType {
  _type: "transformationSection";
  id?: string;
  backgroundImage: CustomImageType;
  title: RichTextType;
  description: RichTextType;
  buttons: ButtonType[];
}

{
  /* Integrated Care */
}

export interface IntegratedCareType {
  _type: "integratedCare";
  title: string;
  features: string[];
}

{
  /* Integrated Care Section */
}

export interface IntegratedCareSectionType {
  _type: "integratedCareSection";
  id?: string;
  title: RichTextType;
  integratedCares: IntegratedCareType[]
}

{
  /* Simple Steps Section */
}

export interface SimpleStepsSectionType {
  _type: "simpleStepsSection";
  id?: string;
  title: RichTextType;
  image:CustomImageType
  titleDescriptions: TitleDescriptionType[]
}

{
  /* Your Success Section */
}

export interface YourSuccessSectionType {
  _type: "yourSuccessSection";
  id?: string;
  title: RichTextType;
  image:CustomImageType
  titleDescriptions: TitleDescriptionType[]
}

{
  /*  Faq Section */
}

export interface FaqSectionType {
  _type: "faqSection";
  id?: string;
  title?: RichTextType;
  questionAndAnswers: QuestionAndAnswerType[];
}

{
  /*  Symptom Solution */
}

export interface SymptomSolutionType {
  _type: "symptomSolution";
  title?: string;
  image: CustomImageType;
  icon: CustomImageType;
}

{
  /*  Symptom Solutions Section */
}

export interface SymptomSolutionsSectionType {
  _type: "symptomSolutionsSection";
  title?: RichTextType;
  id?: string;
  symptomSolutions: SymptomSolutionType[];
}