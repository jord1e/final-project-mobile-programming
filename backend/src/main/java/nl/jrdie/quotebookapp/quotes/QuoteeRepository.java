package nl.jrdie.quotebookapp.quotes;

import nl.jrdie.quotebookapp.entities.QuoteEntity;
import nl.jrdie.quotebookapp.entities.QuoteeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuoteeRepository extends JpaRepository<QuoteeEntity, Long> {
}
