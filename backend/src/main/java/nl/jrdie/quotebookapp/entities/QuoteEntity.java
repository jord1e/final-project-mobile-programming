package nl.jrdie.quotebookapp.entities;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.List;

@Table(name = "quote")
@Entity
public class QuoteEntity {

  @Id @GeneratedValue private Long id;

  @Column(nullable = false)
  private String quoteText;

  @Column(nullable = false)
  private OffsetDateTime createdAt;

  @Column(nullable = false)
  private OffsetDateTime quoteDate;

  @Column private String locationText;

  @Column private String quoteContext;

  @ManyToMany(targetEntity = QuoteeEntity.class, fetch = FetchType.EAGER)
  private List<QuoteeEntity> quotees;

  public Long getId() {
    return id;
  }

  public QuoteEntity setId(Long id) {
    this.id = id;
    return this;
  }

  public String getQuoteText() {
    return quoteText;
  }

  public QuoteEntity setQuoteText(String quoteText) {
    this.quoteText = quoteText;
    return this;
  }

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }

  public QuoteEntity setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
    return this;
  }

  public String getLocationText() {
    return locationText;
  }

  public QuoteEntity setLocationText(String locationText) {
    this.locationText = locationText;
    return this;
  }

  public String getQuoteContext() {
    return quoteContext;
  }

  public QuoteEntity setQuoteContext(String quoteContext) {
    this.quoteContext = quoteContext;
    return this;
  }

  public List<QuoteeEntity> getQuotees() {
    return quotees;
  }

  public QuoteEntity setQuotees(List<QuoteeEntity> quotees) {
    this.quotees = quotees;
    return this;
  }

  public OffsetDateTime getQuoteDate() {
    return quoteDate;
  }

  public QuoteEntity setQuoteDate(OffsetDateTime quoteDate) {
    this.quoteDate = quoteDate;
    return this;
  }
}
